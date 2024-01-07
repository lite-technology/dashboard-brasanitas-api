import formModel from "../../models/form.js";

export default class StatisticsService {

    async get({ start, end }) {
        try {
            const startDate = new Date(start);
            const endDate = new Date(end);

            // Consulta todos os formulários no intervalo de datas
            const forms = await formModel.find({
                createdAt: {
                    $gte: startDate,
                    $lte: endDate
                }
            });

            const initialValue = {
                activityCountByTool: {},
                totalActivityCount: 0,
                scheduledActivityCount: 0,
                unscheduledActivityCount: 0,
                totalWaterConsumption: 0,
                waterConsumptionByActivity: {},
                activityCountByPlate: {},
                activityCountByLocation: {},
                activityCountByUser: {},
            };

            const result = await Promise.all(forms.map(async (form) => {
                const toolPromises = form.tool.map(async (tool) => {
                    initialValue.activityCountByTool[tool] = (initialValue.activityCountByTool[tool] || 0) + 1;
                });

                const waterPromises = form.water.map(async (waterEntry) => {
                    const { action, water } = waterEntry;
                    const waterValue = Number(water);
                    initialValue.waterConsumptionByActivity[action] = (initialValue.waterConsumptionByActivity[action] || 0) + waterValue;
                    initialValue.totalWaterConsumption += waterValue;
                });

                await Promise.all([...toolPromises, ...waterPromises]);

                // Contagem total de atividades (actions, forActions)
                initialValue.totalActivityCount += form.actions.length + form.forActions.length;

                // Contagem de atividades dentro do cronograma (actions)
                initialValue.scheduledActivityCount += form.actions.length;

                // Contagem de atividades fora do cronograma (forActions)
                initialValue.unscheduledActivityCount += form.forActions.length;

                // Contagem de atividades por placa
                initialValue.activityCountByPlate[form.plate.name] = (initialValue.activityCountByPlate[form.plate.name] || 0) + 1;

                // Contagem de atividades por local
                initialValue.activityCountByLocation[form.location] = (initialValue.activityCountByLocation[form.location] || 0) + 1;

                // Contagem de atividades por usuário
                initialValue.activityCountByUser[form.user] = (initialValue.activityCountByUser[form.user] || 0) + 1;

                return initialValue;
            }));

            const finalResult = result[result.length - 1];

            // Cálculo do consumo médio de água
            const averageWaterConsumption = initialValue.totalWaterConsumption / initialValue.totalActivityCount;

            // Cálculo da aderência das atividades
            const adherence = Math.min(10, Math.round((finalResult.scheduledActivityCount / finalResult.totalActivityCount) * 10));

            // Adicionar novos resultados ao resultado final
            const formattedResult = {
                ...finalResult,
                averageWaterConsumption,
                adherence: `${adherence}/10`,
            };

            // Retornar os resultados
            return formattedResult;
        } catch (err) {
            console.error(err);
            return { error: "internal_error" };
        }
    }
}

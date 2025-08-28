import { ref, get, onValue } from "firebase/database";
import { database } from "./firebase";

export interface ClimData {
    Temperatura: number;
    humedad: number;
    punto_rocio: number;
    Sensacion_Termica: number;
    timestamp?: number; // 👈 opcional, útil para tablas
}

// 🔸 Lectura puntual (útil para tablas o consultas históricas)
export async function getClimData(path = "ActualDatos"): Promise<ClimData | null> {
    try {
        const dataRef = ref(database, path);
        const snapshot = await get(dataRef);

        if (snapshot.exists()) {
            return snapshot.val() as ClimData;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al obtener datos:", error);
        return null;
    }
}

// 🔸 Suscripción en tiempo real (útil para dashboards en vivo)
export function subscribeClimData(
    callback: (data: ClimData) => void,
    path = "ActualDatos"
) {
    const dataRef = ref(database, path);
    return onValue(dataRef, (snapshot) => {
        if (snapshot.exists()) {
            callback(snapshot.val() as ClimData);
        }
    });
}

"use client";
import React, { useEffect, useState } from "react";
import { getClimData, ClimData } from "@/lib/getData";

const DataTable = () => {
    const [rows, setRows] = useState<ClimData[]>([]);

    useEffect(() => {
        // 👇 esto es solo ejemplo, lo ideal es que guardes cada lectura en "Historial"
        async function fetchData() {
            const data = await getClimData("Historial"); // ruta distinta
            if (data) {
                // si "Historial" tiene varios registros
                const values = Object.values(data) as ClimData[];
                setRows(values);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Historial de datos</h2>
            <table className="table-auto w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Temperatura</th>
                        <th className="border px-4 py-2">Humedad</th>
                        <th className="border px-4 py-2">Punto rocío</th>
                        <th className="border px-4 py-2">Sensación Térmica</th>
                        <th className="border px-4 py-2">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            <td className="border px-4 py-2">{row.Temperatura} °C</td>
                            <td className="border px-4 py-2">{row.humedad} %</td>
                            <td className="border px-4 py-2">{row.punto_rocio} °C</td>
                            <td className="border px-4 py-2">{row.Sensacion_Termica} °C</td>
                            <td className="border px-4 py-2">
                                {row.timestamp
                                    ? new Date(row.timestamp).toLocaleString()
                                    : "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;

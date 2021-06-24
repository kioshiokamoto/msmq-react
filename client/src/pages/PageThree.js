import React from 'react'
import { Text } from "@chakra-ui/react"
import "../styles/Report.css"
export default function PageThree() {
    return (
        <div className="ConteinerReportCierre">
            <Text fontSize="4xl" color="terciary" p="4">Reporte General</Text>
            <Text fontSize="xl" color="black" p="4">Lista total de los productos</Text>
            <div className="table-wrapper">
                <table className="TableReport">
                    <thead className="TableHead">
                        <th>#</th>
                        <th>Código</th>
                        <th>Nombre del producto</th>
                        <th>Fecha de recepción</th>
                        <th>Estado</th>
                        <th>Precio Unitario (s/.)</th>
                        <th>Stock</th>
                    </thead>
                    <tbody className="TableBody">
                    { [1,2,3,4,5,6,7,8,9,10,11,12,13,45,46,84,78,94,45,87,9,46,46,464,2].map( item => {
                        return (
                            <tr>
                                <td>1</td>
                                <td>P1234567</td>
                                <td>Plancha</td>
                                <td>24/06/21</td>
                                <td>Buen Estado</td>
                                <td>500</td>
                                <td>20</td>
                            </tr>
                            )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

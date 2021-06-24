import React from 'react'
import { Text } from "@chakra-ui/react"
import "../styles/Report.css"
export default function PageThree() {
    return (
        <div className="ConteinerReportCierre">
            <Text fontSize="6xl" color="terciary" p="4">Reporte General</Text>
            <Text fontSize="xl" color="black" p="4">Lista total de los productos</Text>
            <div styles={{overflow:"auto", height:"200px"}}>
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
                    { [1,2,3,4,5,6,7,8,9,10].map( item => {
                        return (
                            <tr>
                                <td>1</td>
                                <td>P1234567</td>
                                <td>Plancha</td>
                                <td type="date">24/06/21</td>
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

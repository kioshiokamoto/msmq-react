import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react"
import "../styles/Report.css"
import { http } from "../fetch";
export default function PageThree() {
    const [reportsGeneral, setReportsGeneral] = useState([])
    const getMessageviewAllSaved = async() => {
        try {
          const res = await http('viewAllSavedMessages')
          const data = await res.json()
          setReportsGeneral(data.content)
        }catch(err){
            console.log('Error msmq: ',err)
        }
      } 
      useEffect(() => {
        getMessageviewAllSaved()
      }, [])
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
                    { (reportsGeneral.length !== 0) && reportsGeneral?.map( (item,index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.state === 'goodstate' ? 'Buen estado' :'Mal estado'}</td>
                                <td>{`S/. ${item.price}`}</td>
                                <td>{item.stock}</td>
                            </tr>
                            )
                    })}
                    {(reportsGeneral.length === 0) && (
                        <tr style={{textAlign:"center"}}>
                            <td colspan="7" >Se cerró el reporte general con los productos del día</td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

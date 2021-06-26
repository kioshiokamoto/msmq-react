import React, { useEffect, useState,useCallback } from "react";
import { Text, Flex, Button, } from "@chakra-ui/react";
import "../styles/Report.css";
import { http } from "../fetch";
export default function PageTwo() {
  const [reports, setReports] = useState([])

  const handleClose = async() => {
    try {
      const res = await http('closeQueue')
      const data = await res.json()
      getMessage()
    }catch(err){
        console.log('Error msmq: ',err)
    }
  }
  const handleClean =async() => {
    try {
      const res = await http('clearQueue')
      const data = await res.json()
      getMessage()
    }catch(err){
        console.log('Error msmq: ',err)
    }
  }
  const getMessage = async() => {
    try {
      const res = await http('viewAllMessages')
      const data = await res.json()
      const parseData = data.content.map( item => (JSON.parse(item.body)))
      setReports(parseData)
    }catch(err){
    }
  }
  useEffect(() => {
    getMessage()
  }, [])
  return (
    <div className="ConteinerReportCierre">
        <Text align="left" justify="left" fontSize="4xl" color="terciary" p="4">
          Reporte de Cierre
        </Text>
        <Text fontSize="xl" color="black" p="4">
          Lista de los productos del días
        </Text>
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
              {(reports.length !== 0) && reports?.map((item, index) => {
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
                );
              })}
              {(reports.length === 0) && (
                  <tr style={{textAlign:"center"}}>
                    <td colspan="7" >Se cerró el reporte con los productos del día</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
        <Flex align="center" justify="center" my="8">
          <Button variant="terciary" w="xs" type="submit" onClick={handleClose} mx="2">
            Cerrar reporte
          </Button>
          <Button variant="terciary" w="xs" type="submit" onClick={handleClean} mx="2">
            Eliminar reporte
          </Button>
        </Flex>
    </div>
  );
}

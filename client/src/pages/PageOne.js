import React, { useState } from 'react'
import { Box,Text, FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    FormHelperText, Grid, Input, Select} from "@chakra-ui/react"
import '../styles/stock.css'
export default function PageOne() {
    const initialState = {
        code:'',
        name:'',
        date:'',
        state:'',
        price:'',
        stock:''
    }
    const [values, setValues] = useState(initialState)
    const {code, name, date, state, price, stock} =values

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const handleReset = () => {
        setValues(initialState)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(values)
        handleReset()
    }


    return (
        <div className="stock-container">
            <Box ml="80"  width="100%">
                <Text fontSize="6xl" color="terciary" p="4">Ingreso de stock</Text>
                <Text fontSize="xl" color="black" p="4">Ingrese los datos del producto </Text>
                <form onSubmit={handleSubmit}>
                    <Grid templateColumns="repeat(2,1fr)" templateRows= "repeat(3,1fr)" gap="4">
                        <FormControl p="10">
                            <FormLabel>Codigo</FormLabel>
                            <Input type="number" placeholder="P. ej. P123456" name="code" onChange={handleChange} value={code}/>
                        
                        </FormControl>
                        <FormControl  p="10">
                            <FormLabel>Nombre del producto</FormLabel>
                            <Input type="text"placeholder="P. ej. Licuadora" name="name"onChange={handleChange} value={name}/>
                            
                        </FormControl>
                        <FormControl  p="10">
                            <FormLabel>Fecha de recepción</FormLabel>
                            <Input type="date" placeholder="Seleccionar fecha" name="date" onChange={handleChange} value={date}/>
                         
                        </FormControl>
                        <FormControl  p="10">
                            <FormLabel>Estado</FormLabel>
                            <Select  placeholder="Seleccionar estado" variant="outline" name="state" onChange={handleChange} value={state}>
                                <option value="badstate" style={{color:'var(--black)'}}>Mal estado</option>
                                <option value="goodstate" style={{color:'var(--black)'}}>Buen estado</option>
                            </Select>
                            
                        </FormControl>
                        <FormControl  p="10">
                            <FormLabel>Precio unitario (S/.)</FormLabel>
                            <Input type="number" placeholder="P. ej. 200" name="price" onChange={handleChange} value={price}/>
                          
                        </FormControl>
                        <FormControl p="10">
                            <FormLabel>Stock</FormLabel>
                            <Input type="number" placeholder="P. ej. 50" name="stock" onChange={handleChange} value={stock}/>
                           
                        </FormControl>
                        <Box pl="10">
                            <Button variant="terciary" w="xs" type="submit">Guardar</Button>
                        </Box>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

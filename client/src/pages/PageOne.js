import React, { useState } from 'react'
import { Box,Text, FormControl,
    FormLabel,
    Button, Grid, Input, Select, useToast} from "@chakra-ui/react"
import '../styles/stock.css'
import DateTimePicker from 'react-datetime-picker';
import { http } from '../fetch';
export default function PageOne() {
    const toast = useToast()
    const initialState = {
        id:'',
        name:'',
        date:'',
        state:'',
        price:'',
        stock:''
    }
    const [values, setValues] = useState(initialState)
    const {id, name, date, state, price, stock} =values

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    // const handleDateChange = ( e ) => {
    //     setValues({
    //         ...values,
    //         date: e
    //     })
    // }

    const handleReset = () => {
        setValues(initialState)
    }
    const handleSubmit = async (event) =>{
        event.preventDefault()
        console.log(values)
        try {

            const res = await http('sendMessage',{ 
                id:values.id,
                name: values.name,
                date:values.date,
                state:values.state,
                price:values.price,
                stock:values.stock
            }, 'POST')
            
            toast({
                title: "Producto",
                description: "Se registro producto correctamente",
                position:"top",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
        }catch(err){
            console.log('Error msmq: ',err)
        }
        handleReset()
    }


    return (
        <div className="stock-container">
            <Box ml="80"  width="100%">
                <Text align="center" justify="center" fontSize="4xl" color="terciary" p="4">Ingreso de stock</Text>
                <Text fontSize="xl" color="black" p="4">Ingrese los datos del producto </Text>
                <form onSubmit={handleSubmit}>
                    <Grid templateColumns="repeat(2,1fr)" templateRows= "repeat(3,1fr)" gap="4">
                        <FormControl p="4">
                            <FormLabel>Codigo</FormLabel>
                            <Input type="number" placeholder="P. ej. P123456" name="id" onChange={handleChange} value={id}/>
                        
                        </FormControl>
                        <FormControl  p="4">
                            <FormLabel>Nombre del producto *</FormLabel>
                            <Input type="text"placeholder="P. ej. Licuadora" name="name"onChange={handleChange} value={name}/>
                            
                        </FormControl>
                        <FormControl  p="4">
                            <FormLabel>Fecha de recepción *</FormLabel>
                            <Input type="date" placeholder="Seleccionar fecha" name="date" onChange={handleChange} value={date}/>
                            {/* <DateTimePicker
                                className="datepicker-form"
                                onChange={handleDateChange}
                                value={date}
                                format={"dd/MM/yyyy h:mm a"}
                            /> */}
                         
                        </FormControl>
                        <FormControl  p="4">
                            <FormLabel>Estado *</FormLabel>
                            <Select 
                            placeholder="Seleccionar estado" 
                            variant="outline" 
                            name="state" 
                            onChange={handleChange} value={state}>
                                <option value="badstate" style={{color:'var(--black)'}}>Mal estado</option>
                                <option value="goodstate" style={{color:'var(--black)'}}>Buen estado</option>
                            </Select>
                            
                        </FormControl>
                        <FormControl  p="4">
                            <FormLabel>Precio unitario (S/.) *</FormLabel>
                            <Input 
                            type="number" 
                            placeholder="P. ej. 200" 
                            name="price" 
                            onChange={handleChange} value={price}/>
                          
                        </FormControl>
                        <FormControl p="4">
                            <FormLabel>Stock *</FormLabel>
                            <Input  
                            type="number" 
                            placeholder="P. ej. 50" 
                            name="stock" 
                            onChange={handleChange} value={stock}/>
                           
                        </FormControl>
                        <Box pl="4">
                            <Button variant="terciary" w="xs" type="submit">Guardar</Button>
                        </Box>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

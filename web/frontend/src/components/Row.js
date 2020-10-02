import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import { connect } from 'react-redux'
import itemActions from '../redux/actions/itemActions'

const styleInput = (condicion) => {
    return({
	    outline:'0px',
        border: 0,
        width:'7vw',
        margin: 0,
        padding:0,
        borderRadius:'50px',
        textAlign:'center',
        backgroundColor: condicion? 'white':'#EAF3F2'
    })
}

const RowInterno =  (props) => {
    const [variants, setVariants] = useState({...props.variants,_id:props._id})
    const [bloque, setBloque] = useState(true)
    const updateVariants = (condi) => {
        setBloque(!condi)
        //if(!condi) return
    }
    const updateStock = (e) =>{
        let key = e.target.name
        let value = e.target.value
        setVariants({...variants,[key]: value})
    }       
    console.log(1)
    return(
        <TableRow key={variants.color}>
            <TableCell align="center">
                <img src={variants.photo} style={{width:'3em', height:'3em'}} alt={variants.size}/>
            </TableCell>
            <TableCell align="center">
                <input name='stock' 
                    style={styleInput(bloque)}  
                    value={variants.stock}
                    onChange={(e) => updateStock(e)}
                    disabled ={bloque}
                /> 
            </TableCell>
                <TableCell align="center"><input style={styleInput(true)} value={variants.size} disabled={true}/></TableCell>
                    <TableCell align='center'><input style={styleInput(true)} value={variants.color} disabled={true}/></TableCell>
            <TableCell align='center'>
                <IconButton style={{outline:'0px'}} ><DeleteIcon/></IconButton>
                <IconButton style={{outline:'0px'}} onClick={() => updateVariants(bloque)}><CreateSharpIcon/></IconButton>
            </TableCell>
        </TableRow>
    )
}



const Row = (props) => {
    const [product, setProduct] = useState({...props.row})
    const headerRowIterno = ['Phote','Stock', 'Size', 'Color', 'Delate / Update']
    const [bloque, setBloque] = useState(true)
    const [open, setOpen] = React.useState(false)
    console.log(props)
    const modifyProd = () => {
        setBloque(!bloque)
        if(bloque) return;
        props.modifyProduct(product)
    }
    return ( 
        <React.Fragment>
            <TableRow>
                <TableCell align="center">
                    <IconButton size="small" style={{outline:'0px'}} onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon className='ss' /> : <KeyboardArrowDownIcon className='ssss' />}
                    </IconButton>
                </TableCell>
                <TableCell align="center">                           
                        <input type='text' style={styleInput(bloque)} value={product.title} 
                        onChange={(e) => setProduct({...product,title:e.target.value})} disabled={bloque}/>  
                </TableCell>
                <TableCell align="center">
                    <input type={'text'} style={styleInput(bloque)}  value={product.description} 
                        onChange={(e) => setProduct({...product,description:e.target.value})} disabled={bloque}/></TableCell>
                <TableCell align="center">
                    <input type="text" style={styleInput(bloque)} value={product.price} 
                        onChange={(e) => setProduct({...product,price:e.target.value})} disabled={bloque}/>
                </TableCell>
                <TableCell align='center'>
                    <IconButton style={{outline:'0px'}} onClick = {() => props.deleteItem(product)} >
                        <DeleteIcon/>
                    </IconButton>
                        <IconButton style={{outline:'0px'}} onClick={() => modifyProd()}>
                            <CreateSharpIcon/>
                        </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 12, paddingTop: 22 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box style={{margin:'0em 5em', border:'solid 1px black'}}>
                        <Typography variant="h6" align='center' gutterBottom component="div">
                            {`Variants of ${product.title}`}
                        </Typography>
                        <Table size="small" aria-label="purchases" >
                            <TableHead>
                                <TableRow>
                                    {headerRowIterno.map((header,index) => <TableCell key={index} align="center">{header}</TableCell>)} 
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {product.variants.map((vari,index) => <RowInterno {...props} key={index} variants={vari} _id={product._id}/>)}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>);
}


const mapDispatchToProps = {
    deleteItem: itemActions.deleteItem,
    modifyProduct: itemActions.modifyProduct

}
export default connect(null, mapDispatchToProps)(Row)

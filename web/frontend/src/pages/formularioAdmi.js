import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Header from '../components/Header'
import itemActions from '../redux/actions/itemActions'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import Avatar from '@material-ui/core/Avatar';
import '../styles/styles.css'
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
    const [product, setProduct] = useState({...props.row})
    const [bloque, setBloque] = useState(true)
    const [open, setOpen] = React.useState(false)
    const styleInput = {
        border:0,
        textAlign:'center',
        backgroundColor:'white'
    }

    console.log(props.row,'asasass')
    const classes = useRowStyles();
    return ( 
        <React.Fragment>
            <TableRow className={classes.root}>
                    <TableCell align="center"><IconButton className='yo' aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon className='ss' /> : <KeyboardArrowDownIcon className='ssss' />}
                        </IconButton>
                            <input type='text' style={styleInput} value={product.title} 
                                onChange={(e) => setProduct({...product,title:e.target.value})} disabled={bloque}/>  
                    </TableCell>
                    <TableCell align="center"><input type={'text'} style={styleInput}  value={product.description} 
                        onChange={(e) => setProduct({...product,description:e.target.value})} disabled={bloque}/></TableCell>
                    <TableCell align="center"><input type="text" style={styleInput} 
                        value={product.price} onChange={(e) => setProduct({...product,price:e.target.value})} disabled={bloque}/>
                    </TableCell>
                        <TableCell>
                            <IconButton><DeleteIcon/></IconButton>
                                <IconButton onClick={() => setBloque(!bloque)}><CreateSharpIcon/></IconButton>
                        </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 12, paddingTop: 22 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box style={{margin:'1em 5em', border:'solid 1px black'}}>
                        <Typography variant="h6" align='center' gutterBottom component="div">
                            {`Variants of ${product.title}`}
                        </Typography>
                        <Table size="small" aria-label="purchases" >
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Stock</TableCell>
                                    <TableCell align="center">size</TableCell>
                                    <TableCell align="center">Color</TableCell>
                                    <TableCell align="center">Phote </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {product.variants.map((vari) => (
                                    <TableRow key={vari.color}>
                                        <TableCell align="center">{vari.stock}</TableCell>
                                        <TableCell align="center">{vari.size}</TableCell>
                                        <TableCell align='center'>{vari.color}</TableCell>
                                        <TableCell align="center"><img src={vari.photo} style={{width:'3em', height:'3em'}} alt={vari.size}/></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>);
}


function CollapsibleTable(props) {
    useEffect(() => {
        const get = async () => await props.getProducts
        get()
    },[props.products]) 
    return (<>
        <Header/>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" >Title</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell/>        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.products.map(row => <Row key={row.title} row={row} />)}
                </TableBody>
            </Table>
        </TableContainer>
    </>)
}

const mapStateToProps = state => {
    return {
        products : state.itemReducer.product
	}
}
const mapDispatchToProps = {
    getProducts: itemActions.getProducts
}
export default connect(mapStateToProps, mapDispatchToProps)(CollapsibleTable)

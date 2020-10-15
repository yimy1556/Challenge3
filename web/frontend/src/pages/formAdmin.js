import React, { useEffect } from 'react';
import { connect } from 'react-redux'

// Actions
import HeaderAdmin from '../components/HeaderAdmin'
import itemActions from '../redux/actions/itemActions'
import Row from '../components/Row'

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function CollapsibleTable(props) {
    const headerFormu = ['Variants', 'Title', 'Description', 'Price', 'Delate / Update']
    useEffect(() => {
        props.getProducts()
    }, [])

    return (<>
        <HeaderAdmin />
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {headerFormu.map(header => <TableCell align='center'>{header}</TableCell>)}
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
        products: state.itemReducer.product
    }
}

const mapDispatchToProps = {
    getProducts: itemActions.getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(CollapsibleTable)

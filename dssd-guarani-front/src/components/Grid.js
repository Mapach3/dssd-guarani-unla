import { L10n, setCulture} from '@syncfusion/ej2-base';
import * as React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    RowDD,
    Inject,
    Resize,
    Reorder,
    Sort,
    Aggregate,
    AggregateColumnsDirective,
    AggregateColumnDirective,
    AggregateDirective,
    AggregatesDirective,
    Edit,
    Selection,
    Toolbar,
    Group,
    ExcelExport,
    PdfExport
} from '@syncfusion/ej2-react-grids';
import Tooltip from '@material-ui/core/Tooltip';
import './grid-style.css';

var toolbarBuild = []
const builderToolbar  = (props) =>{
    toolbarBuild = []
    if(props.searching){
        toolbarBuild.push('Search');
    }

    if(props.export){
       // toolbarBuild.push('ExcelExport');
        toolbarBuild.push('PdfExport');
      //  toolbarBuild.push('CsvExport');
    }

    if(props.allowDeleting){
        toolbarBuild.push('Delete');
    }

    if(props.showButtonPersonalized){
        toolbarBuild.push(props.buttonPersonalized);
    }
} 


export default function CustomGrid(props) {
    let gridInstance;
    builderToolbar(props);
    function footerSum(value, limit) {
        return (
            <Tooltip title={limit ? 'Límite: ' + limit : ''}>
                <span className={(value > (limit || value) ? 'exceeded' : 'notExceeded')}>{value}</span>
            </Tooltip>);
    }

    function toolbarClick(args,value) {
        debugger;
        switch (args.item.text) {
            case 'PDF Export':
                let exportProperties = {
                    fileName:"Planilla.pdf",
                    header : {
                        fromTop : 0,
                        height: 50,
                        contents : [{
                            type: 'Text',
                            value: props.headerExportText,
                            position: { x: 200, y: 5 },
                            style: { textBrushColor: '#000000', fontSize: 18}       
                        },
                        ]
                    }
                 };
                gridInstance.pdfExport(exportProperties);
                break;
            case 'CSV Export':
                gridInstance.csvExport();
                break;
            case 'Exportar a Excel':
                gridInstance.excelExport();
                break;
            case 'Visualizar Info':
                props.viewKeyInfo(gridInstance.getSelectedRows()[0].innerText)
                break;
            default:
                break;
        }
    }
    
    return (
        <React.Fragment>
            <b>{props.header}</b>
            <GridComponent id={props.id} dataSource={props.dataSource} locale='es-ES'   
                allowPaging={true} pageSettings={props.pageSettings} allowRowDragAndDrop={props.allowRowDragAndDrop}
                rowDropSettings={{ targetID: 'DestGrid' }} selectionSettings={props.selectionSettings} created={props.created}
                allowSorting={props.allowSorting} rowDrop={(event) => props.callbackFunction(event)} sortSettings={props.sortSettings}
                allowTextWrap={props.allowTextWrap} allowResizing={props.allowResizing} rowHeight={props.rowHeight}
                allowReordering={props.allowReordering} editSettings={props.editSettings} actionComplete={props.onSave}
                allowSelection={true} allowDeleting= {props.allowDeleting} allowEditing= {true} contextMenuItems={true}
                toolbar={toolbarBuild}
                allowGrouping={props.allowGrouping}
                groupSettings={props.allowGrouping ?  props.groupSettings : null}
                rowDataBound={props.rowDataBound}
                rowSelected={props.rowSelected}
                rowDeselected={props.rowDeselected}
                ref={grid => gridInstance = grid} allowExcelExport={props.export} allowPdfExport={props.export}
                toolbarClick={(args,value) => toolbarClick(args,value)}>

                <ColumnsDirective>
                    {props.columns.map((column, i) => {
                        return <ColumnDirective
                            key={i}
                            field={column.field}
                            headerText={column.header}
                            width={column.width}
                            textAlign={column.textAlign}
                            format={column.format}
                            isPrimaryKey={column.isPrimaryKey}
                            editType={column.editType}
                            editTemplate={column.editTemplate}
                            visible={column.visible}
                            displayAsCheckBox={column.displayAsCheckBox}                       
                        />                       
                    })}                   
                </ColumnsDirective>

                {props.aggregateColumns &&
                    <AggregatesDirective>
                        <AggregateDirective>
                            <AggregateColumnsDirective>
                                {props.aggregateColumns.map((aggregateColumn, i) => {
                                    return <AggregateColumnDirective
                                        key={i}
                                        field={aggregateColumn.field}
                                        type={aggregateColumn.type}
                                        format={aggregateColumn.format}
                                        footerTemplate={value => footerSum(value.Sum, aggregateColumn.limit)} />
                                })}
                            </AggregateColumnsDirective>
                        </AggregateDirective>
                    </AggregatesDirective>
                }
                <Inject services={[Page, RowDD, Resize, Reorder, Selection, Sort, Aggregate, Edit, Toolbar, Group, ExcelExport, PdfExport]} />
            </GridComponent>
        </React.Fragment>
    );
}

setCulture('es-ES')

L10n.load({
    'es-ES': {
        'grid': {
            'EmptyDataSourceError': 'Ocurrió un error al intentar obtener los datos',
            'EmptyRecord': 'No hay registros para mostrar',
            'Search': 'Buscar',
            'pagerDropDown': 'Items por página',
            'Pdfexport': 'Exportar a PDF',
            'Excelexport': 'Exportar a Excel',
            'Csvexport': 'Exportar a CSV',
            'Add': 'Agregar',
            'Cancel': 'Cancelar',
            'GroupDropArea': 'Arrastrar encabezado para agrupar por columna',
            'Delete': 'Borrar',
        },
        'pager': {
            'FirstPage': 'Primera página',
            'LastPage': 'Última página',
            'PreviousPage': 'Página anterior',
            'NextPage': 'Página siguiente',
            'currentPageInfo': '{0} de {1} registros',
            'firstPageTooltip': 'Primera página',
            'lastPageTooltip': 'Última página',
            'nextPageTooltip': 'Página siguiente',
            'previousPageTooltip': 'Página anterior',
            'totalItemsInfo': '({0} registros)',
            'pagerDropDown': 'Items por página',
        }
    }
});

// EJEMPLO DE COMO  SE DEBERIA LLAMAR 
// SE PASAN LAS PROPS
// <CustomGrid id='defaultGrid'
// dataSource={keysDistributors}
// pageSettings={{ pageCount: 1, pageSizes: [5, 10, 12, 15, 20, 50] }}
// allowPaging={false}
// selectionSettings={{ type: 'Multiple' }}
// allowResizing={true}
// allowSorting={true}
// allowTextWrap={true}
// searching={true}
// rowHeight={20}
// columns={accessorsDistributors}
// allowGrouping={true}
// allowDeleting={true}
// editSettings={{ allowDeleting: true }}
// onSave={callBackGrid}
// buttonPersonalized={{ text: 'Visualizar Info', tooltipText: 'Visualizar Info', prefixIcon: 'e-viewKey', id: 'ViewButtonPersonalized' }}
// showButtonPersonalized={true}
// viewKeyInfo={viewKeyInfo}
// />

//las mas importantes son las columns y el datasource 
// PARA EXPORTAR MANDAR LA PROP EXPORT EN TRUE
//EN LA CLASE DE LLAMADA DE LA GRILLA , DEFNIR LAS COLUMANS ASI
// const accessorsDistributorsSubject = [
//     { header: "Materia", field: "name", width: '40', textAlign: 'Center' }
//     { header: "Día y Horario", field: "date", width: '40', textAlign: 'Center' }
//     { header: "Docentes", field: "teachers", width: '40', textAlign: 'Center' }
//     { header: "Año", field: "year", width: '40', textAlign: 'Center' }
//     { header: "Turno", field: "shift", width: '40', textAlign: 'Center' }
// ];

// const accessorsDistributorsFinal = [
//     { header: "Materia", field: "subject", width: '40', textAlign: 'Center' },
//     { header: "Día y Hora", field: "weekDay", width: '40', textAlign: 'Center' },
//     { header: "Docentes", field: "teachers", width: '40', textAlign: 'Center' }
// ];


import XlsxPopulate from "xlsx-populate/browser/xlsx-populate";
import * as XLSX from 'xlsx';
/**
 * Generates Excel manually with duplicated template structure
 * @param {Array} equipments - Equipment array with history data
 */
const generateExcel = async (equipments) => {
    console.log(equipments);
  try {
    const workbook = await XlsxPopulate.fromBlankAsync();
    const sheet = workbook.sheet(0);
    sheet.name("Equipment History");

    //Title
    sheet.range('A1:O1').merged(true).value('Republic of the Philippines').style({ horizontalAlignment: 'center', fontSize: 12, fontFamily: 'Times New Roman'  })
    sheet.range('A2:O2').merged(true).value('CITY GOVERNMENT OF OROQUIETA').style({ horizontalAlignment: 'center', bold: true, fontSize: 12, fontFamily: 'Times New Roman' })
    sheet.range('A3:O3').merged(true).value('Oroquieta City').style({ horizontalAlignment: 'center', fontSize: 12, fontFamily: 'Times New Roman' })
    sheet.range('A4:O4').merged(true).value('OFFICE OF THE CITY GENERAL SERVICES OFFICE').style({ horizontalAlignment: 'center', bold: true, fontSize: 12, fontFamily: 'Berlin Sans FB Demi' })
    sheet.range('A6:O6').merged(true).value('HISTORY OF MOTOR VEHICLE/ HEAVY EQUIPMENT REPAIR').style({ horizontalAlignment: 'center', bold: true, fontSize: 14, fontFamily: 'Arial Narrow', fontColor: '002060' })
    sheet.range('A7:O7').merged(true).value('(REPLACEMENT OF WORN-OUT PARTS AND LABOR SERVICES)').style({ horizontalAlignment: 'center', bold: true, fontSize: 12, fontFamily: 'Arial Narrow' })

    //Equipment Data
    sheet.cell('A9').value('Name of Property').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('D9').value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('A10').value('Vehicle/Equipment Description ').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('D10').value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('A11').value('Plate No.').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('D11').value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('A12').value('Chassis No.').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('D12').value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('A13').value('Engine No.').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('D13').value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('A14').value('Accountable Office').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('D14').value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('J9').value('Property/ Equipment No').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('L9').value(':').style({ horizontalAlignment: 'right', fontSize: 11, fontFamily: 'Calibri' })    
    sheet.cell('J11').value('Date Acquired').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('L11').value(':').style({ horizontalAlignment: 'right', fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('J12').value('Acquisition Cost').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('L12').value(':').style({ horizontalAlignment: 'right', fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('J13').value('Date Reported as Unserviceable  :').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('J14').value('Acquisition Cost').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('L14').value(':').style({ horizontalAlignment: 'right', fontSize: 11, fontFamily: 'Calibri' })
    sheet.range('E9:H9').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('E10:O10').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('E11:H11').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('E12:H12').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('E13:H13').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('E14:H14').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('M9:O9').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('M11:O11').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('M12:O12').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('M13:O13').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    sheet.range('M14:O14').merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
    //History TABLE
    sheet
        .range('A15:O15')
        .merged(true)
        .value('MAINTENANCE EXPENDITURES')
        .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D9E1F2',})
    sheet
        .range('A16:A17')
        .merged(true)
        .value('Date of Service')
        .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE',})
    sheet
        .range('B16:C16')
        .merged(true)
        .value('Purchase Order')
        .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: '808080', })
    sheet
        .cell('B17')
        .value('Number')
        .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .cell('C17')
        .value('Date')
        .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .range('D16:E17')
        .merged(true)
        .value('Supplier / Mechanic')
        .style({ verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .range('F16:G16')
        .merged(true)
        .value('D. R. /Service Inv.')
        .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: '808080', })
    sheet
        .cell('F17')
        .value('Number')
        .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .cell('G17')
        .value('Date')
        .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .range('H16:H17')
        .merged(true)
        .value('Details of Maintenance/ Repair')
        .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .range('I16:J17')
        .merged(true)
        .value('Parts Replaced\n(If any)')
        .style({ verticalAlignment: 'center',horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .range('K16:K17')
        .merged(true)
        .value('QTY')
        .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .range('L16:L17')
        .merged(true)
        .value('Unit')
        .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .range('M16:M17')
        .merged(true)
        .value('Unit Price')
        .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .range('N16:N17')
        .merged(true)
        .value('TOTAL')
        .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    sheet
        .range('O16:O17')
        .merged(true)
        .value('Remarks/ Recommendation')
        .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
    
    
    sheet.range('D18:E18').merged(true)
    sheet.range('D19:E19').merged(true)
    sheet.range('D20:E20').merged(true)
    sheet.range('D21:E21').merged(true)
    sheet.range('D22:E22').merged(true)
    sheet.range('D23:E23').merged(true)
    sheet.range('D24:E24').merged(true)
    sheet.range('D25:E25').merged(true)
    sheet.range('I18:J18').merged(true)
    sheet.range('I19:J19').merged(true)
    sheet.range('I20:J20').merged(true)
    sheet.range('I21:J21').merged(true)
    sheet.range('I22:J22').merged(true)
    sheet.range('I23:J23').merged(true)
    sheet.range('I24:J24').merged(true)
    sheet.range('I25:J25').merged(true)
    
    //Border Tablee
    sheet.range('A18:O25').style({wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
    sheet.range('A15:O25').style({ border: {
                        top: { style: 'thin', color: 'black' },
                        bottom: { style: 'thin', color: 'black' },
                        left: { style: 'thin', color: 'black' },
                        right: { style: 'thin', color: 'black' },
                      } })
    sheet.cell('A26').value('CERTIFICATION:').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
    sheet.range('A27:O27').merged(true)
        .value('      I hereby certify that the above information is true and correct based on the official records and documents relating to the repair history, labor services rendered, and spare parts used for the vehicle/heavy equipment as stated above. All entries have been verified and are in accordance with existing government rules and auditing guidelines.')
        .style({wrapText: true, horizontalAlignment: 'left', italic: true, fontSize: 10, fontFamily: 'Calibri' })
    sheet.cell('A29').value('Certified Correct:').style({ horizontalAlignment: 'left', fontSize: 11, fontFamily: 'Calibri' })
    sheet.range('C30:G30').merged(true).style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri', border: {bottom: { style: 'thick', color: 'black' }} })
    sheet.range('C31:G31').merged(true).value('Property/Supply Officer').style({ horizontalAlignment: 'center', italic: true,  fontSize: 11, fontFamily: 'Calibri' })
    sheet.cell('J29').value('Noted :').style({ horizontalAlignment: 'left', fontSize: 11, fontFamily: 'Calibri' })
    sheet.range('J30:N30').merged(true).value('GAY C. MONDOY').style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', border: {bottom: { style: 'thick', color: 'black' }} })
    sheet.range('J31:N31').merged(true).value('OIC City General Services Office').style({ horizontalAlignment: 'center', italic: true,  fontSize: 11, fontFamily: 'Calibri' })
    // Column Size
    sheet.column('A').width(11.29)
    sheet.column('B').width(7.86)
    sheet.column('C').width(9.86)
    sheet.column('D').width(1)
    sheet.column('E').width(22.43)
    sheet.column('F').width(7.86)
    sheet.column('G').width(7.86)
    sheet.column('H').width(19.14)
    sheet.column('I').width(1.75)
    sheet.column('J').width(19.29)
    sheet.column('K').width(5.14)
    sheet.column('L').width(4.86)
    sheet.column('M').width(9.29)
    sheet.column('N').width(11.43)
    sheet.column('O').width(16.43)
    // Column Row
    sheet.row('1').height(15.75)
    sheet.row('2').height(15.75)
    sheet.row('3').height(15.75)
    sheet.row('4').height(15.75)
    sheet.row('5').height(9)
    sheet.row('6').height(15.75)
    sheet.row('7').height(15.75)
    sheet.row('8').height(9)
    sheet.row('9').height(15.75)
    sheet.row('10').height(31.50)
    sheet.row('11').height(15.75)
    sheet.row('12').height(18)
    sheet.row('13').height(18)
    sheet.row('14').height(18)
    sheet.row('27').height(25.50)
    sheet.row('30').height(17.25)

     foreach(const equipment of equipments) {
      sheet.cell('E9').value(equipment.name)
      for(const history of equipment.histories ){
        sheet.cell('D18').value(history.supplier_or_mechanic)
        for(const part of history.parts){
            sheet.cell('M18').value(part.unit_price)
        }
      }
      
    //   sheet.cell('M18').value(equipment.histories.parts.unit_price)
    }

    // ----------- DOWNLOAD FILE -----------
    const blob = await workbook.outputAsync();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.download = "equipment-history.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (err) {
    console.error("Excel generation failed", err);
  }
};

export default generateExcel;

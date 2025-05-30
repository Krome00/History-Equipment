import XlsxPopulate from "xlsx-populate/browser/xlsx-populate";
import * as XLSX from 'xlsx';

/**
 * Generates Excel manually with duplicated template structure
 * @param {Array} equipments - Equipment array with history data
 */
const generateExcelMultiSheet = async (equipments) => {
  try {
    const workbook = await XlsxPopulate.fromBlankAsync();
    for (const equipment of equipments) {

        const sheet = workbook.addSheet(`${equipment.name}`);

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
        
        // Adjust table depending on the number of parts
        let totalParts = 0;
        for(const history of equipment.histories){
            for(const part of history.parts){
                totalParts++;
            }
        }
        // console.log(`Total Parts for Equipment ${equipment.name}: `,totalParts)
        
        // Loop The Merged Cell D&E and I&J depending on total number of parts
        const start = 18;
        const end = start + totalParts;

        for (let i = start; i < end; i++) {
            sheet.range(`D${i}:E${i}`).merged(true);
            sheet.range(`I${i}:J${i}`).merged(true)
        }
        // sheet.range(`D${r(17)}:E${r(17)}`).merged(true)
        // sheet.range(`D${r(18)}:E${r(18)}`).merged(true)
        // sheet.range(`D${r(19)}:E${r(19)}`).merged(true)
        // sheet.range(`D${r(20)}:E${r(20)}`).merged(true)
        // sheet.range(`D${r(21)}:E${r(21)}`).merged(true)
        // sheet.range(`D${r(22)}:E${r(22)}`).merged(true)
        // sheet.range(`D${r(23)}:E${r(23)}`).merged(true)
        // sheet.range(`D${r(24)}:E${r(24)}`).merged(true)
        // sheet.range(`I${r(17)}:J${r(17)}`).merged(true)
        // sheet.range(`I${r(18)}:J${r(18)}`).merged(true)
        // sheet.range(`I${r(19)}:J${r(19)}`).merged(true)
        // sheet.range(`I${r(20)}:J${r(20)}`).merged(true)
        // sheet.range(`I${r(21)}:J${r(21)}`).merged(true)
        // sheet.range(`I${r(22)}:J${r(22)}`).merged(true)
        // sheet.range(`I${r(23)}:J${r(23)}`).merged(true)
        // sheet.range(`I${r(24)}:J${r(24)}`).merged(true)
        
        //Number of Rows Bordered for Table
        let totalTable = 17 + totalParts;
        //Border Tablee
        sheet.range(`A18:O${totalTable}`).style({wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
        sheet.range(`A15:O${totalTable}`).style({ border: {
                            top: { style: 'thin', color: 'black' },
                            bottom: { style: 'thin', color: 'black' },
                            left: { style: 'thin', color: 'black' },
                            right: { style: 'thin', color: 'black' },
                        } })
        //Footer
        
        sheet.cell(`A${totalTable + 1}`).value('CERTIFICATION:').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.range(`A${totalTable + 2}:O${totalTable + 2}`).merged(true)
            .value('      I hereby certify that the above information is true and correct based on the official records and documents relating to the repair history, labor services rendered, and spare parts used for the vehicle/heavy equipment as stated above. All entries have been verified and are in accordance with existing government rules and auditing guidelines.')
            .style({wrapText: true, horizontalAlignment: 'left', italic: true, fontSize: 10, fontFamily: 'Calibri' })
        sheet.cell(`A${totalTable + 4}`).value('Certified Correct:').style({ horizontalAlignment: 'left', fontSize: 11, fontFamily: 'Calibri' })
        sheet.range(`C${totalTable + 5}:G${totalTable + 5}`).merged(true).style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri', border: {bottom: { style: 'thick', color: 'black' }} })
        sheet.range(`C${totalTable + 6}:G${totalTable + 6}`).merged(true).value('Property/Supply Officer').style({ horizontalAlignment: 'center', italic: true,  fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`J${totalTable + 4}`).value('Noted :').style({ horizontalAlignment: 'left', fontSize: 11, fontFamily: 'Calibri' })
        sheet.range(`J${totalTable + 5}:N${totalTable + 5}`).merged(true).value('GAY C. MONDOY').style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', border: {bottom: { style: 'thick', color: 'black' }} })
        sheet.range(`J${totalTable + 6}:N${totalTable + 6}`).merged(true).value('OIC City General Services Office').style({ horizontalAlignment: 'center', italic: true,  fontSize: 11, fontFamily: 'Calibri' })
       
        //Column Width
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
        //Row Height
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
        sheet.row(`${totalTable + 2}`).height(25.50)
        sheet.row(`${totalTable + 5}`).height(17.25)

        // Populate DATA
        sheet.cell(`E9`).value(equipment.name)
        sheet.cell(`E10`).value(equipment.description)
        sheet.cell(`E11`).value(equipment.plate_no)
        sheet.cell(`E12`).value(equipment.chassis_no)
        sheet.cell(`E13`).value(equipment.engine_no)
        sheet.cell(`E14`).value(equipment.accountable_office)
        sheet.cell(`M9`).value(equipment.property_no)
        sheet.cell(`M11`).value(equipment.date_acquired)
        sheet.cell(`M12`).value(equipment.acquisition_cost)
        sheet.cell(`M13`).value(equipment.date_unserviceable)
        sheet.cell(`M14`).value(equipment.accountable_officer)
        
        let startHistory = 18
        for(const history of equipment.histories){
            sheet.cell(`A${startHistory}`).value(history.date_of_service)
            sheet.cell(`B${startHistory}`).value(history.po_number)
            sheet.cell(`C${startHistory}`).value(history.po_date)  
            sheet.cell(`D${startHistory}`).value(history.supplier_or_mechanic)
            sheet.cell(`F${startHistory}`).value(history.dr_or_si_number)
            sheet.cell(`G${startHistory}`).value(history.dr_or_si_date)
            sheet.cell(`H${startHistory}`).value(history.maintenance_details)
            sheet.cell(`O${startHistory}`).value(history.remarks)
            for(const part of history.parts){
                sheet.cell(`I${startHistory}`).value(part.part_name)
                sheet.cell(`K${startHistory}`).value(part.qty)
                sheet.cell(`L${startHistory}`).value(part.unit)
                sheet.cell(`M${startHistory}`).value(part.unit_price)
                sheet.cell(`N${startHistory}`).value(part.total)
                startHistory++;
            }


        }
        
    }

    workbook.deleteSheet("Sheet1"); //delete sheet1

    // ----------- DOWNLOAD FILE -----------
    const blob = await workbook.outputAsync();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.download = "equipment-history-all.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (err) {
    console.error("Excel generation failed", err);
  }
};

export default generateExcelMultiSheet;

import XlsxPopulate from "xlsx-populate/browser/xlsx-populate";
import * as XLSX from 'xlsx';
/**
 * Generates Excel manually with duplicated template structure
 * @param {Array} equipments - Equipment array with history data
 */
const generateExcelOneSheet = async (equipments) => {
  try {
    let startRow = 1;
    const GAP = 6;
    const TEMPLATE_HEIGHT = 30;
    const workbook = await XlsxPopulate.fromBlankAsync();
    const sheet = workbook.sheet(0);
    sheet.name("Equipment History");
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

    for (const equipment of equipments) {
        const r = (offset) => startRow + offset;
        //Title
        sheet.range(`A${r(0)}:O${r(0)}`).merged(true).value('Republic of the Philippines').style({ horizontalAlignment: 'center', fontSize: 12, fontFamily: 'Times New Roman'  })
        sheet.range(`A${r(1)}:O${r(1)}`).merged(true).value('CITY GOVERNMENT OF OROQUIETA').style({ horizontalAlignment: 'center', bold: true, fontSize: 12, fontFamily: 'Times New Roman' })
        sheet.range(`A${r(2)}:O${r(2)}`).merged(true).value('Oroquieta City').style({ horizontalAlignment: 'center', fontSize: 12, fontFamily: 'Times New Roman' })
        sheet.range(`A${r(3)}:O${r(3)}`).merged(true).value('OFFICE OF THE CITY GENERAL SERVICES OFFICE').style({ horizontalAlignment: 'center', bold: true, fontSize: 12, fontFamily: 'Berlin Sans FB Demi' })
        sheet.range(`A${r(5)}:O${r(5)}`).merged(true).value('HISTORY OF MOTOR VEHICLE/ HEAVY EQUIPMENT REPAIR').style({ horizontalAlignment: 'center', bold: true, fontSize: 14, fontFamily: 'Arial Narrow', fontColor: '002060' })
        sheet.range(`A${r(6)}:O${r(6)}`).merged(true).value('(REPLACEMENT OF WORN-OUT PARTS AND LABOR SERVICES)').style({ horizontalAlignment: 'center', bold: true, fontSize: 12, fontFamily: 'Arial Narrow' })

        //Equipment Data
        sheet.cell(`A${r(8)}`).value('Name of Property').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`D${r(8)}`).value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`A${r(9)}`).value('Vehicle/Equipment Description ').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`D${r(9)}`).value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`A${r(10)}`).value('Plate No.').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`D${r(10)}`).value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`A${r(11)}`).value('Chassis No.').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`D${r(11)}`).value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`A${r(12)}`).value('Engine No.').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`D${r(12)}`).value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`A${r(13)}`).value('Accountable Office').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`D${r(13)}`).value(':').style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`J${r(8)}`).value('Property/ Equipment No').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`L${r(8)}`).value(':').style({ horizontalAlignment: 'right', fontSize: 11, fontFamily: 'Calibri' })    
        sheet.cell(`J${r(10)}`).value('Date Acquired').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`L${r(10)}`).value(':').style({ horizontalAlignment: 'right', fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`J${r(11)}`).value('Acquisition Cost').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`L${r(11)}`).value(':').style({ horizontalAlignment: 'right', fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`J${r(12)}`).value('Date Reported as Unserviceable  :').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`J${r(13)}`).value('Accountable Office').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`L${r(13)}`).value(':').style({ horizontalAlignment: 'right', fontSize: 11, fontFamily: 'Calibri' })
        sheet.range(`E${r(8)}:H${r(8)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`E${r(9)}:O${r(9)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`E${r(10)}:H${r(10)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`E${r(11)}:H${r(11)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`E${r(12)}:H${r(12)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`E${r(13)}:H${r(13)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`M${r(8)}:O${r(8)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`M${r(10)}:O${r(10)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`M${r(11)}:O${r(11)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`M${r(12)}:O${r(12)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        sheet.range(`M${r(13)}:O${r(13)}`).merged(true).style({border: {bottom: { style: 'thin', color: 'black' }}})
        //History TABLE
        sheet
            .range(`A${r(14)}:O${r(14)}`)
            .merged(true)
            .value('MAINTENANCE EXPENDITURES')
            .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D9E1F2',})
        sheet
            .range(`A${r(15)}:A${r(16)}`)
            .merged(true)
            .value('Date of Service')
            .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE',})
        sheet
            .range(`B${r(15)}:C${r(15)}`)
            .merged(true)
            .value('Purchase Order')
            .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: '808080', })
        sheet
            .cell(`B${r(16)}`)
            .value('Number')
            .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .cell(`C${r(16)}`)
            .value('Date')
            .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .range(`D${r(15)}:E${r(16)}`)
            .merged(true)
            .value('Supplier / Mechanic')
            .style({ verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .range(`F${r(15)}:G${r(15)}`)
            .merged(true)
            .value('D. R. /Service Inv.')
            .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: '808080', })
        sheet
            .cell(`F${r(16)}`)
            .value('Number')
            .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .cell(`G${r(16)}`)
            .value('Date')
            .style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .range(`H${r(15)}:H${r(16)}`)
            .merged(true)
            .value('Details of Maintenance/ Repair')
            .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .range(`I${r(15)}:J${r(16)}`)
            .merged(true)
            .value('Parts Replaced\n(If any)')
            .style({ verticalAlignment: 'center',horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .range(`K${r(15)}:K${r(16)}`)
            .merged(true)
            .value('QTY')
            .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .range(`L${r(15)}:L${r(16)}`)
            .merged(true)
            .value('Unit')
            .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .range(`M${r(15)}:M${r(16)}`)
            .merged(true)
            .value('Unit Price')
            .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .range(`N${r(15)}:N${r(16)}`)
            .merged(true)
            .value('TOTAL')
            .style({ wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', fill: 'D0CECE', })
        sheet
            .range(`O${r(15)}:O${r(16)}`)
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
        const start = 17;
        const end = start + totalParts;

        for (let i = start; i < end; i++) {
            sheet.range(`D${r(i)}:E${r(i)}`).merged(true);
            sheet.range(`I${r(i)}:J${r(i)}`).merged(true)
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
        let totalTable = 16 + totalParts;
        //Border Tablee
        sheet.range(`A${r(17)}:O${r(totalTable)}`).style({wrapText: true, verticalAlignment: 'center', horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri' })
        sheet.range(`A${r(14)}:O${r(totalTable)}`).style({ border: {
                            top: { style: 'thin', color: 'black' },
                            bottom: { style: 'thin', color: 'black' },
                            left: { style: 'thin', color: 'black' },
                            right: { style: 'thin', color: 'black' },
                        } })
        //Footer
        
        sheet.cell(`A${r(totalTable + 1)}`).value('CERTIFICATION:').style({ horizontalAlignment: 'left', bold: true, fontSize: 11, fontFamily: 'Calibri' })
        sheet.range(`A${r(totalTable + 2)}:O${r(totalTable + 2)}`).merged(true)
            .value('      I hereby certify that the above information is true and correct based on the official records and documents relating to the repair history, labor services rendered, and spare parts used for the vehicle/heavy equipment as stated above. All entries have been verified and are in accordance with existing government rules and auditing guidelines.')
            .style({wrapText: true, horizontalAlignment: 'left', italic: true, fontSize: 10, fontFamily: 'Calibri' })
        sheet.cell(`A${r(totalTable + 4)}`).value('Certified Correct:').style({ horizontalAlignment: 'left', fontSize: 11, fontFamily: 'Calibri' })
        sheet.range(`C${r(totalTable + 5)}:G${r(totalTable + 5)}`).merged(true).style({ horizontalAlignment: 'center', fontSize: 11, fontFamily: 'Calibri', border: {bottom: { style: 'thick', color: 'black' }} })
        sheet.range(`C${r(totalTable + 6)}:G${r(totalTable + 6)}`).merged(true).value('Property/Supply Officer').style({ horizontalAlignment: 'center', italic: true,  fontSize: 11, fontFamily: 'Calibri' })
        sheet.cell(`J${r(totalTable + 4)}`).value('Noted :').style({ horizontalAlignment: 'left', fontSize: 11, fontFamily: 'Calibri' })
        sheet.range(`J${r(totalTable + 5)}:N${r(totalTable + 5)}`).merged(true).value('GAY C. MONDOY').style({ horizontalAlignment: 'center', bold: true, fontSize: 11, fontFamily: 'Calibri', border: {bottom: { style: 'thick', color: 'black' }} })
        sheet.range(`J${r(totalTable + 6)}:N${r(totalTable + 6)}`).merged(true).value('OIC City General Services Office').style({ horizontalAlignment: 'center', italic: true,  fontSize: 11, fontFamily: 'Calibri' })
       
        // Column Row Height
        sheet.row(`${r(0)}`).height(15.75)
        sheet.row(`${r(1)}`).height(15.75)
        sheet.row(`${r(2)}`).height(15.75)
        sheet.row(`${r(3)}`).height(15.75)
        sheet.row(`${r(4)}`).height(9)
        sheet.row(`${r(5)}`).height(15.75)
        sheet.row(`${r(6)}`).height(15.75)
        sheet.row(`${r(7)}`).height(9)
        sheet.row(`${r(8)}`).height(15.75)
        sheet.row(`${r(9)}`).height(31.50)
        sheet.row(`${r(10)}`).height(15.75)
        sheet.row(`${r(11)}`).height(18)
        sheet.row(`${r(12)}`).height(18)
        sheet.row(`${r(13)}`).height(18)
        sheet.row(`${r(totalTable + 2)}`).height(25.50)
        sheet.row(`${r(totalTable + 5)}`).height(17.25)

        // Populate DATA
        sheet.cell(`E${r(8)}`).value(equipment.name)
        sheet.cell(`E${r(9)}`).value(equipment.description)
        sheet.cell(`E${r(10)}`).value(equipment.plate_no)
        sheet.cell(`E${r(11)}`).value(equipment.chassis_no)
        sheet.cell(`E${r(12)}`).value(equipment.engine_no)
        sheet.cell(`E${r(13)}`).value(equipment.accountable_office)
        sheet.cell(`M${r(8)}`).value(equipment.property_no)
        sheet.cell(`M${r(10)}`).value(equipment.date_acquired)
        sheet.cell(`M${r(11)}`).value(equipment.acquisition_cost)
        sheet.cell(`M${r(12)}`).value(equipment.date_unserviceable)
        sheet.cell(`M${r(13)}`).value(equipment.accountable_officer)
        
        let startHistory = r(17)
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
        

        startRow += TEMPLATE_HEIGHT + GAP;
    }                  
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

export default generateExcelOneSheet;

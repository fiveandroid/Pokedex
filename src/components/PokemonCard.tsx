import {  useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import  Modal  from "./Modal";
import PDFDocument from "./PDFDocument"


interface Props {
  name: string;
  url: string;
  abilities: [];
}


export default function PokemonCard(props: Props) {

  const [open, setOpen] = useState<boolean>(false)
  const [openPDF, setOpenPDF] = useState<boolean>(false)
  const [pdfView, setPdfView] = useState<boolean>(false)

  const handleClick = () => {
   setOpen(true)
  }

  

  return (
    <article className="bg-white/10 p-4 flex flex-col 
      justify-center items-center"    
      onClick={handleClick}>
      <img src={props.url} alt={props.name} />
      <h2 className="text-white font-semibold text-lg">{props.name}</h2>
      
      <Modal open={open} onClose={ ()=> setOpen(false)} >
        <section className="flex flex-row items-center self-center ">
          <div className="bg-auto flex-50 w-full p-2 rounded lg:w-1/3 md:w-1/2 items-center self-center">
            <img src={props.url} alt={props.name} />
          </div>
          
          <div className=" flex flex-col">
            <div className="flex-auto font-bold text-lg mb-4">
              {props.name}
            </div>
            
            {props.abilities.map((ability: any) => {
               
              return (
              
                <p className="font-semibold text-base">{ability.ability.name}</p>
                         
              );
            })}

            <button 
              className='bg-cyan-400 py-1 px-6 rounded-lg 
                text-white font-semibold mt-4'
                onClick={ () =>{
                  setPdfView( !pdfView )
                  setOpenPDF( !openPDF )

                }}
            >
              { pdfView ? "Close PDF": "See PDF"}
            </button>
          </div>
          
        </section>
      </Modal>

      <Modal open={openPDF} onClose={ ()=> { setOpenPDF(false) 
      setPdfView( false )} } >
        { pdfView ? ( 
          <section className="flex flex-col items-center self-center ">
            <PDFViewer className="container mx-auto px-4">
              <PDFDocument              
                name={props.name}
                url={props.url}
                abilities={props.abilities} />
            </PDFViewer> 

            <PDFDownloadLink 
              document={
                <PDFDocument              
                    name={props.name}
                    url={props.url}
                    abilities={props.abilities} />
              }
              fileName="Pokemon_report.pdf"

              >
              <button 
                className='bg-cyan-400 py-1 px-6 rounded-lg 
                text-white font-semibold mt-4'
                onClick={ () =>{
                  setPdfView( !pdfView )
                  setOpenPDF( !openPDF )
                }}
              >
                { pdfView ? "Download PDF": "Ver PDF"}
              </button>
            </PDFDownloadLink>
          
          </section>
          ): null }

      </Modal>
  

    </article>
  );
}

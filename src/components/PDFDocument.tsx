import {Document, Page, View, Text, Image} from "@react-pdf/renderer"

interface Props {
    name: string;
    url: string;
    abilities: [];
}

const PDFDocument = ( props: Props )=>{

        
    return (
        <Document >
            <Page size="A4">
                
                <View style ={{ 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"

                    }}>
                    
                    <Image
                        fixed
                        cache={false}
                        style={{ maxWidth: "600px", maxHeight: "400px" }}
                        src={props.url}
                    />               

                                        
                    <Text style={{ fontSize: "42px", marginBottom: "15px"}}>{ props.name }
                    </Text>
                    
                    <Text style={{ fontSize: "32px", marginBottom: "10px"}}>Habilidades
                    </Text>

                    {props.abilities.map((ability: any) => {

            
                        return (

                        <Text style={{ fontSize: "28px"}} >{ability.ability.name}</Text>
                                
                        );
                    })}
                    
                </View>
                <View>
                    <Text render={({pageNumber, totalPages})=>`${pageNumber}/${totalPages}`} />
                </View>
            </Page>
           
        </Document>
    )
}

export default PDFDocument
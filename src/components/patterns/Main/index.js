
import Title from "@/components/Title";
import Image from "next/image";
import TextoP from "@/components/Texto/TextoP";
export default function Main() {
    return (
        <div className="section">
            <Title tag={'h1'} textAlign={'right'} color={'#00000080'}>Escolha o guincho certo para seu veículo pesado</Title>
            <div className="main-section">
            <div className="teste"><Image src={"/images/marshall-minzz-JJda_SHp67M-unsplash.jpg"} fill ></Image></div>
                <aside className="TextoP">
                <TextoP tag={'p'} textAlign={'rigth'} color={'#00000080'}>A empresa Jevs Rakja está comprometida em simplificar o processo de atendimento ao cliente no WhatsApp, visando resolver eficazmente os problemas logísticos enfrentados pelos usuários. Para alcançar esse objetivo, a empresa está implementando mudanças significativas nas perguntas feitas pelo seu chat no WhatsApp.

As duas primeiras perguntas agora se concentram nas informações essenciais para atender às necessidades dos clientes. A primeira pergunta será sobre a marca do veículo, seguida pela pergunta sobre o modelo. Essas duas perguntas iniciais fornecerão as informações necessárias para continuar o atendimento de forma mais eficiente.

A terceira pergunta, que costumava ser sobre o implemento veicular, foi ajustada para ser feita após a obtenção das informações da marca e modelo. Isso garantirá que as informações relacionadas ao implemento estejam diretamente vinculadas ao veículo principal, evitando confusões e facilitando a gestão dos seguros e questões logísticas.

Além disso, a empresa também está incorporando uma pergunta relacionada ao PBTC (Peso Bruto Total Combinado) do veículo. O PBTC é a soma do peso do veículo mais a quantidade de peso que ele pode carregar. Essa informação é essencial para determinar qual guincho ou serviço de transporte é apropriado, já que o envio do guincho deve levar em consideração o peso máximo do veículo. Portanto, ao fornecer o PBTC, o motorista terá informações suficientes para escolher o guincho correto e evitar complicações desnecessárias no processo de transporte.

Com essas melhorias nas perguntas do chat no WhatsApp, a Jevs Rakja está empenhada em proporcionar uma experiência mais eficaz e eficiente aos seus clientes, eliminando a necessidade de várias perguntas e garantindo que todas as informações cruciais sejam coletadas de maneira mais direta, simplificando assim os processos logísticos e melhorando o atendimento ao cliente.</TextoP>
                </aside>
                
                <aside className="left-menu">
                </aside>

                <aside className="right-menu">
            </aside>
            </div>

            <style jsx>{`
                .main-section{
                    display: flex;                
                    padding:16px;
                    gap:20px;      
                    justify-content: center; 
                    align-items:center;
                    flex-direction: column;   
                }
                .TextoP{
                    display: flex;
                    justify-content:center;
                    align-items:center;
                    text-aling:center;
                    
                }

                
                .section{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;  
                    max-width:100%;
                    gap:50px;
                    margin:0 20px;
                }

                .teste{
                        position:relative;
                        display:flex;
                         flex-direction:column;
                         justify-content:center;
                        align-items:center; 
                        width:100vh;
                        height:356px;
                    }

                @media (max-width:800px){
                    .main-section{                    
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        width:100%;
                        min-width:360px;
                    }
                

                    

                    .teste{
                        position:relative;
                         display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        width:100vh;
                        height:356px;
                    }
                    .section{
                        display:flex;
                         justify-content:center;
                        align-items:center;
                    }
                }
                `}

            </style>
        </div>
    )
}
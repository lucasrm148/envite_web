import { createContext, useState } from "react";
import { IConvidado } from "../model/Convidados";
import { IConvite } from "../model/Convite";
import { IEvento } from "../model/Eventos";

export interface EventContextInterface {
    convidados: IConvidado[];
    convite: IConvite | null;
    eventoDados: IEvento | null;
    convidadoSelecionado:string,
    selectConvidado:(convidado:string)=>void
    addConvidado: (convidado: IConvidado) => void;
    updateConvite: (novoConvite: IConvite) => void;
    setEventoDados: (novoEvento: IEvento) => void;
    
  }
  // Criando o contexto
  export const EventContext = createContext<EventContextInterface | undefined>(undefined);

  export function EventContextProvider({ children }:any) {
    const [convidados, setConvidados] = useState<IConvidado[]>([]);
    const [convite, setConvite] = useState<IConvite | null>(null);
    const [convidadosSelecionado,selectConvidado] = useState("")
    const [eventoDados, setEventoDados] = useState<IEvento>({
        hash_name: "",
        data: null,
        hash_organizador: "",
        forma_pagamento: "",
        nome: "",
    })
  
    function addConvidado(convidado: IConvidado) {
      setConvidados([...convidados, convidado]);
    }
  
    function updateConvite(novoConvite: IConvite) {
      setConvite(novoConvite);
    }
  
    function setNovoEvento(novoEvento: IEvento) {
      setEventoDados(novoEvento);
    }
  
    const data: EventContextInterface = {
      convidados,
      convite,
      eventoDados,
      addConvidado,
      updateConvite,
      setEventoDados: setNovoEvento,
      convidadoSelecionado:convidadosSelecionado,
      selectConvidado: selectConvidado
    };
  
    return (
        <EventContext.Provider value={data}>
        {children}
        </EventContext.Provider>
    );
}
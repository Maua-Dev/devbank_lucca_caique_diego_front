import { transactions } from "../mock/Transactions";

export interface TransacaoData {
    id: string;
    tipo: string;
    valor: number;
    saldo: number;
    data: number;
}

export function handleTransaction(
    tipo: string,
    valor: number,
    timestamp: number,
    saldoAtual: number,
    id: string = transactions.length != 0 ? String(Number(transactions[transactions.length - 1]["id"]) + 1) : "1"
): TransacaoData {
    const newTransaction = {
        "id": id,
        "tipo": tipo,
        "valor": valor,
        "saldo": saldoAtual,
        "data": timestamp
    };
    transactions.push(newTransaction)
    return newTransaction;
}
export interface Moneyxchange {
    success: boolean;
    timestamp: Date;
    date: string;
    rates: { 
        USD: number,
    };
  }
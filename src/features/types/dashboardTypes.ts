
  export interface piePoints {
    name: string;
    y: number;
  }
  
  export interface PieData {
    data: {"carbon_generation":piePoints[],"energy_production":PieData[],"energy_consumption":PieData[]}
    loading: boolean;
    error:string;
  }
  
  export interface BarData {
    // Define the structure for BarData if it's different from PieData
    data: {"energy_consumed":number[],"energy_produced":number[],"carbon_generated":number[]}
    loading: boolean;
    error:string;
  }
  
  export interface DashboardStateType {
    pieData: PieData;
    barData: BarData;
  }
  
  
  
export interface FaultLineFeature {
  type: string;
  properties: {
    average_dip: string;
    average_rake: string;
    catalog_id: string;
    catalog_name: string;
    dip_dir: string;
    lower_seis_depth: string;
    name: string;
    net_slip_rate: string;
    slip_type: string;
    upper_seis_depth: string;
  };
  geometry: {
    type: string;
    coordinates: number[][];
  };
}

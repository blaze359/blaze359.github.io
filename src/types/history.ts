export interface Position {
    Title: string;
    StartDate: string;
    EndDate: string;
    Responsibilities: string[];
}

export interface WorkHistory {
    Company: string;
    HQLocation: string;
    Location: string;
    StartDate: string;
    EndDate: string;
    Positions: Position[];
}

export interface Education {
    School: string;
    Location: string;
    Degree: string;
    Major: string;
    GraduationYear: string;
}

export interface Certificate {
    Name: string;
    IssuingOrganization: string;
    Badge: string;
}

export interface HistoryData {
    History: WorkHistory[];
    Education: Education[];
    Certificates: Certificate[];
}

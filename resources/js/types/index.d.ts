export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface ComplaintStatus {
    id: number;
    complaint_id: number;
    new_status: string;
    note: string;
}


export interface ComplaintFile {
    id: number;
    file_path: string;    
}

export interface Complaint {
    id: number;
    name: string;
    message: string;
    latitude: number;
    longitude: number;
    audio: string;
    files: ComplaintFile[];
    statuses: ComplaintStatus;
    created_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

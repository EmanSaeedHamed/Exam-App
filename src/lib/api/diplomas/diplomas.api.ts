import type { IDiplomasResponse } from "@/lib/types/diplomas";
import type { IDiplomaExamsResponse } from "@/lib/types/diploma-exams";

        // get diplomas
export async function getDiplomas(): Promise<IDiplomasResponse> {
    const response = await fetch('https://exam-app.elevate-bootcamp.cloud/api/diplomas?page=1&limit=20',
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZThhMWNiZC03ZTVkLTRiMTktODAzNS0wNmNjZTcyMTA2ZmIiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc3NTAyODY0MiwiZXhwIjoxNzc1NjMzNDQyfQ.RlelYrGcyRNpjKm_HYBAY5o9PW2Y1VeVEOGqPUcZEZM'
            }
        }
    );
    const payload = (await response.json()) as IDiplomasResponse;
    return payload;
}


    //   get diploma by id
export async function getDiplomaById(id: string): Promise<IDiplomaExamsResponse> {
        const response = await fetch(`https://exam-app.elevate-bootcamp.cloud/api/diplomas/${id}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZThhMWNiZC03ZTVkLTRiMTktODAzNS0wNmNjZTcyMTA2ZmIiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc3NTAyODY0MiwiZXhwIjoxNzc1NjMzNDQyfQ.RlelYrGcyRNpjKm_HYBAY5o9PW2Y1VeVEOGqPUcZEZM'
                }
            }
        );
        const payload = (await response.json()) as IDiplomaExamsResponse;
        return payload;
}
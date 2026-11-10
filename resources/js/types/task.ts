export type Task = {
    id: number;
    title: string;
    description: string | null;
    project: string | null;
    due_at: string | null;
    is_completed: boolean;
    completed_at: string | null;
    created_at: string;
};

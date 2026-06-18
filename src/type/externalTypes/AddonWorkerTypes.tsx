// Various types for the Addon's workers

export type WorkerAPIResponse = {
    status: WorkerStatus,
    tasks: WorkerTask[]
};

export type WorkerTask = {
    type: string,
    title: string,
    status: WorkerTaskStatus,
    description: string,
    error: string | undefined
};

export type WorkerStatus = "WorkerState.RUNNING" | "WorkerState.IDLE" | "WorkerState.NOT_STARTED" | "WorkerState.SHUT_DOWN";

export type WorkerTaskStatus = "TaskState.COMPLETED" | "TaskState.RUNNING" | "TaskState.NOT_STARTED" | "TaskState.FAILED";

export type SchedulerAPIResponse = {
    schedule: SchedulerEntry[]
};

export type SchedulerEntry = {
    task: WorkerTask,
    queue_time: string,
    daily: boolean
};
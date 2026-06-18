import ExportButton from "../components/ExportButton";
import {
    List,
    Typography
} from "@mui/material";
import TaskListItem from "../components/TaskListItem";
import { type SchedulerAPIResponse, type WorkerAPIResponse, type SchedulerEntry, type WorkerTask, type WorkerStatus } from "../type/externalTypes/AddonWorkerTypes";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

/* Icons needed:
 * - Running : LoopIcon
 * - Idle : PendingIcon
 * - Not started : ModeStandbyIcon
 * - Shut down : PowerSettingsNew
 * - Failed : ReportProblem
 * - Scheduled : CalendarMonth
 * - Completed : CheckCircle
*/
import LoopIcon from '@mui/icons-material/Loop';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import PendingIcon from '@mui/icons-material/Pending';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Status() {
    // Obtain data from addon API
    const sampleSchedule : SchedulerAPIResponse = {
        schedule: [
            {
                task: {
                    type: "TestTask",
                    title: "A test",
                    status: "TaskState.RUNNING",
                    description: "This is a test of the task scheduler",
                    error: null
                },
                queue_time: "2026-06-17T22:55:20.473100",
                daily: false
            }
        ]
    };

    const sampleWorker : WorkerAPIResponse = {
        status: "WorkerState.NOT_STARTED",
        tasks: [
            {
                type: "CompletedTask",
                title: "A job well done",
                status: "TaskState.COMPLETED",
                description: "A successful task that was completed",
                error: null
            },
            {
                type: "FailingTask",
                title: "A horrible failure",
                status: "TaskState.FAILED",
                description: "This task will always fail",
                error: "These are the details of the horrible failure"
            },
            {
                type: "TestTask",
                title: "A test",
                status: "TaskState.RUNNING",
                description: "This is a test of the task queue",
                error: null
            },
            {
                type: "TestTask",
                title: "A test",
                status: "TaskState.NOT_STARTED",
                description: "A task that hasn't yet been ran",
                error: null
            },
        ]
    }

    // Function to build elements for entries
    const buildScheduleEntry = (entry: SchedulerEntry) => <TaskListItem
        avatar={<CalendarMonthIcon/>}
        textPrimary={entry.task.type + " : " + entry.task.title}
        textSecondary={"will run at " + entry.queue_time + (entry.daily ? ", repeating daily" : "")} avatarMainColor={"black"} avatarBackgroundColor={"#dddddd"}
    />;
    const buildWorkerEntry = (entry: WorkerTask) => <TaskListItem
        avatar={
            entry.status == "TaskState.COMPLETED" ? <CheckCircleIcon/> :
            entry.status == "TaskState.FAILED" ? <ReportProblemIcon/> :
            entry.status == "TaskState.NOT_STARTED" ? <PendingIcon/> :
            entry.status == "TaskState.RUNNING" ? <LoopIcon/> 
            : <></>
        }
        textPrimary={entry.type + " : " + entry.title}
        textSecondary={entry.status == "TaskState.FAILED" ? entry.error : entry.description}
        avatarMainColor={
            entry.status == "TaskState.COMPLETED" ? "#00aa00" :
            entry.status == "TaskState.FAILED" ? "#aa0000" :
            entry.status == "TaskState.NOT_STARTED" ? "#aaaaaa" :
            entry.status == "TaskState.RUNNING" ? "black" 
            : "white"
        }
        avatarBackgroundColor={
            entry.status == "TaskState.COMPLETED" ? "#aaffaa" :
            entry.status == "TaskState.FAILED" ? "#ffaaaa" :
            entry.status == "TaskState.NOT_STARTED" ? "#dddddd" :
            entry.status == "TaskState.RUNNING" ? "#bbbbbb" 
            : "white"
        }
    />;
    const buildSystemStatus = (status: WorkerStatus) => <ListItem className=" bg-slate-200 rounded-2xl mt-2">
        <ListItemAvatar sx={{
            color:
                status == "WorkerState.IDLE" ? "black" :
                status == "WorkerState.NOT_STARTED" ? "#aaaaaa" :
                status == "WorkerState.RUNNING" ? "#00aa00" :
                status == "WorkerState.SHUT_DOWN" ? "#aa0000" : <></>
            ,
            background:
                status == "WorkerState.IDLE" ? "#bbbbbb" :
                status == "WorkerState.NOT_STARTED" ? "#dddddd" :
                status == "WorkerState.RUNNING" ? "#aaffaa" :
                status == "WorkerState.SHUT_DOWN" ? "#ffaaaa" : <></>
        }} className="rounded-full text-center pl-0 pr-0 pt-3 pb-3 mr-4">
            {
                status == "WorkerState.IDLE" ? <ModeStandbyIcon/> :
                status == "WorkerState.NOT_STARTED" ? <PendingIcon/> :
                status == "WorkerState.RUNNING" ? <LoopIcon/> :
                status == "WorkerState.SHUT_DOWN" ? <PowerSettingsNewIcon/> : <></>
            }
        </ListItemAvatar>
        <ListItemText primary={"System is " + (
                status == "WorkerState.IDLE" ? "Idle" :
                status == "WorkerState.NOT_STARTED" ? "Not running" :
                status == "WorkerState.RUNNING" ? "Running" :
                status == "WorkerState.SHUT_DOWN" ? "Shutting down" : ""
            )
        } secondary={
            status == "WorkerState.IDLE" ? "No tasks are currently active" :
            status == "WorkerState.NOT_STARTED" ? "The addon is still starting up" :
            status == "WorkerState.RUNNING" ? "The addon is completing a task" :
            status == "WorkerState.SHUT_DOWN" ? "The addon was shut down" : ""
        } />
    </ListItem>;

    // Build elements for entries
    const scheduleElements = sampleSchedule.schedule.map(buildScheduleEntry);
    const workerElements = sampleWorker.tasks.map(buildWorkerEntry);
    const systemStatus = buildSystemStatus(sampleWorker.status);

    // Page content
    return (
        <>
            {/* System status */}
            {systemStatus}

            {/* Task queue */}
            <div className="bg-slate-200 rounded-2xl w-full mt-2 p-4">
                <Typography variant="h5">Task Queue</Typography>
                <List>
                    {workerElements}
                </List>
            </div>

            {/* Schedule */}
            <div className="bg-slate-200 rounded-2xl w-full mt-2 p-4">
                <Typography variant="h5">Schedule</Typography>
                <List>
                    {scheduleElements}
                </List>
            </div>
            <ExportButton/>
        </>
    )
}
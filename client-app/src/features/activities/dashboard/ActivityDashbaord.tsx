import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

import ActivityDetails from "../details/ActivityDetails";
import AcitivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashbaord({activities, selectActivity, deleteActivity,
    selectedActivity, cancelSelectActivity, editMode, openForm, 
    closeForm, createOrEdit, submitting}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity} 
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity &&  !editMode &&
                <ActivityDetails 
                    activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}
                />}
                {editMode && 
                <AcitivityForm 
                    closeForm={closeForm} 
                    activity={selectedActivity} 
                    createOrEdit={createOrEdit} 
                    submitting={submitting}
                />}
            </Grid.Column>
        </Grid>
    )
}
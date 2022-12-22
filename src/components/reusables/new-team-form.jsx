import TeamMember from "./team-member";
import ActionTag from "./actionTag";

function NewTeamForm({newMemberEmail, setNewMemberEmail, onChange, newTeam, addTeamMember, removeTeamMember, newMemberEmailError, createNewTeam, discardNewTeam, newTeamError}) {
return (
        <div className="new-team-form mb-20">
            <div className="mb-20">
                <h3 className="mb-10">Team title:</h3>
                <input className='title-input' name="title" value={newTeam.title} onChange={onChange} placeholder='Create a new team.'/>
            </div>

            <div className="mb-20">
                <textarea name="description" value={newTeam.description} onChange={onChange} placeholder='Give your team a description.' />
            </div>

            <div className="add-team-member">
                <div className="mb-10 flex flex-row ai-center">
                    <h3 className="mr-10">Team members:</h3>
                    <input type="text" value={newMemberEmail} onChange={e => setNewMemberEmail(e.target.value)} className="team-members" placeholder="Search for team members by email"/>
                    <button onClick={addTeamMember} className="btn large add-team-member-btn">Add Team Member</button>
                </div>
                <ul>
                    {newMemberEmailError && <li className="mb-10 error-message">{newMemberEmailError}</li>}
                </ul>
            </div>

            <div className="team-member-container mb-20">
                {
                    newTeam.members && newTeam.members.map(member => <TeamMember email={member} removeTeamMember={removeTeamMember}/>)
                }
            </div>

            <ActionTag
                discardLabel='Discard'
                saveLabel='Create Team'
                onSave={createNewTeam}
                onDiscard={discardNewTeam}
            />

            <ul>
                {newTeamError && <li className="mb-10 error-message">{newTeamError}</li>}
            </ul>

        </div>
    );
}

export default NewTeamForm;

// onChange={(e) => setTitle(e.target.value)} value={title}
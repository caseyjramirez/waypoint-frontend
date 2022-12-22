import React, { useState, useEffect } from 'react';
import Directory from "../components/reusables/directory";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TeamCard from "../components/reusables/team-card";
import NewTeamForm from "../components/reusables/new-team-form";
import { validateNewTeamMemberEmail } from '../validation/newTeam.validation';
import { createTeam } from '../services/services';

function Teams({ users, viewing }) {
    const plus = <FontAwesomeIcon icon={faPlus} className='icon' />

    const [isCreatingNewTeam, setIsCreatingNewTeam] = useState(false)
    const [newTeam, setNewTeam] = useState({
        title: "", 
        description: "", 
        members: []
    })
    const [newTeamError, setNewTeamError] = useState('')
    const [newMemberEmail, setNewMemberEmail] = useState('')
    const [newMemberEmailError, setNewMemberEmailError] = useState('')

    
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewTeam({ ...newTeam, [name]: value })
    }
    
    
    function onCreateNewTeam() {
        setNewMemberEmailError('')
        setNewMemberEmail('')
        setIsCreatingNewTeam(isCreatingNewTeam => !isCreatingNewTeam)
    }

    function addTeamMember() {
        setNewMemberEmailError('')
        const {error} = validateNewTeamMemberEmail(newMemberEmail)

        if(error) {
            return setNewMemberEmailError('Must be a valid Email.')
        }

        setNewTeam({ ...newTeam, members: [...newTeam.members, newMemberEmail] })
        setNewMemberEmail('')
    }

    function removeTeamMember(removedEmail) {
        setNewTeam({ ...newTeam, members: newTeam.members.filter(email => email !== removedEmail) })
    }

    async function saveNewTeam() {
        setNewTeamError('')
        if(!newTeam.title) return setNewTeamError('Give your team a title!');

        const data = await createTeam(newTeam)
        console.log(data);


    }

    console.log(newTeam);

    return (
        <div className="teams">
            <div className="teams-header">
                <Directory 
                    viewing={viewing}
                />
            </div>

            <div className="teams-feed">
                <div className="teams-feed-header mb-40">
                    <div>
                        <button className='mx-10 btn plus-button teams-plus' onClick={onCreateNewTeam}>{plus}</button>
                    </div>
                    <div className="ml-40">
                        <h1 className="mb-10">Create a new Team</h1>
                        <h3 className="light-color">You have 3 tasks to complete today...</h3>
                    </div>
                </div>

                {
                    isCreatingNewTeam ? <NewTeamForm 
                        onChange={handleChange}
                        newTeam={newTeam}
                        newMemberEmail={newMemberEmail}
                        newMemberEmailError={newMemberEmailError}
                        setNewMemberEmail={setNewMemberEmail}
                        addTeamMember={addTeamMember}
                        removeTeamMember={removeTeamMember}
                        createNewTeam={saveNewTeam}
                        discardNewTeam={onCreateNewTeam}
                        newTeamError={newTeamError}
                    /> : null
                }

                <div className="teams-feed-feed">

                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>


            </div>
        </div>
    );
}

export default Teams;
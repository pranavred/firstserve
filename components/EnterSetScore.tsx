'use client'
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";




const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

//const { groupId } = req.query;
const groupId = 1;
const showAllPlayers = async () => {
    const { data, error } = await supabase
      .from('playerDetails')
      .select('player_firstname, player_lastname')
      .eq('group_id',groupId)
      .order('player_firstname', { ascending: true });
    if (error) {
      throw error;
    }
    return data ? data.map(player => `${player.player_firstname} ${player.player_lastname}`) : [];
  }
/*
  const addScore = async (setId, setNumber, playerA, playerB, playerAScore, playerBScore, playerC, playerD, playerCScore, playerDScore) => {
    const { data, error } = await supabase
      .from('scores')
      .insert([
        { match_id: matchId, set_number: setNumber, teamA_score: teamAScore, teamB_score: teamBScore },
      ]);
    if (error) {
      throw error;
    }
    return data;
  }
*/

export default function Page() {  
    const [players, setPlayers] = useState<any[]>([]); // Initialize state
    const [setId, setSetId] = useState('');
    const [matchId, setMatchId] = useState('');
    const [setNumber, setSetNumber] = useState('');
    const [teamAScore, setTeamAScore] = useState('');
    const [teamBScore, setTeamBScore] = useState('');
    const [playerA, setPlayerA] = useState('');
    const [playerAScore, setPlayerAScore] = useState('');
    const [playerB, setPlayerB] = useState('');
    const [playerBScore, setPlayerBScore] = useState('');
    const [playerC, setPlayerC] = useState('');
    const [playerCScore, setPlayerCScore] = useState('');
    const [playerD, setPlayerD] = useState('');
    const [playerDScore, setPlayerDScore] = useState('');
  
    useEffect(() => {
      const fetchPlayers = async () => {
        const playersData = await showAllPlayers();
        setPlayers(playersData);
      };
  
      fetchPlayers(); // Fetch players when component mounts
    }, []);
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      await addScore(matchId, setId, setNumber, playerA, playerB, playerAScore, playerBScore, playerC, playerD, playerCScore, playerDScore);
      setMatchId('');
      setSetNumber('');
      setTeamAScore('');
      setTeamBScore('');
      setPlayerA('');
      setPlayerB('');
      setPlayerC('');
      setPlayerD('');
    };
  
    return (
      <div>
        <MaxWidthWrapper className='mb-8 mt-24 text-center max-w-5xl'>
          <div className='mx-auto mb-10 sm:max-w-3xl'>
            
            <form onSubmit={handleSubmit}>
              <input type="text" value={matchId} onChange={e => setMatchId(e.target.value)} placeholder="Match ID" required />
              <input type="text" value={setNumber} onChange={e => setSetNumber(e.target.value)} placeholder="Set Number" required />
              <select value={playerA} onChange={e => setPlayerA(e.target.value)} required>
                <option value="">Select Player A</option>
                {players.map(player => <option key={player.id} value={player.id}>{player.player_firstname}</option>)}
              </select>
              <select value={playerB} onChange={e => setPlayerB(e.target.value)} required>
                <option value="">Select Player B</option>
                {players.map(player => <option key={player.id} value={player.id}>{player.player_firstname}</option>)}
              </select>
              <input type="text" value={teamAScore} onChange={e => setTeamAScore(e.target.value)} placeholder="Team A Score" required />
              <select value={playerC} onChange={e => setPlayerC(e.target.value)} required>
                <option value="">Select Player C</option>
                {players.map(player => <option key={player.id} value={player.id}>{player.player_firstname}</option>)}
              </select>
              <select value={playerD} onChange={e => setPlayerD(e.target.value)} required>
                <option value="">Select Player D</option>
                {players.map(player => <option key={player.id} value={player.id}>{player.player_firstname}</option>)}
              </select>
              <input type="text" value={teamBScore} onChange={e => setTeamBScore(e.target.value)} placeholder="Team B Score" required />
              <button type="submit">Submit</button>
            </form>
          </div>
          </MaxWidthWrapper>
        </div>
    );
  }
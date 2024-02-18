'use client'
import MatchScoreboard from "@/components/MatchScoreboard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";


interface playersProps {
  firstname: string;
  lastname: string;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const matchData = {
    teamA: {
      name: 'J. Lohoff / C. Perrin',
      country: 'GER_SUI',
      score: ['4', '4', '-'], // Ensure the scores are strings
      isWinner: false
    },
    teamB: {
      name: 'F. Wu / T. Zidansek',
      country: 'TPE_SLO',
      score: ['6', '6', '-'], // Ensure the scores are strings
      isWinner: true
    }
  };
  
  
  const showAllPlayers = async () => {
    const { data, error } = await supabase
      .from('playerDetails')
      .select('player_firstname, player_lastname')
      .order('player_lastname', { ascending: true });
    if (error) {
      throw error;
    }
    return data ? data.map(player => `${player.player_firstname} ${player.player_lastname}`) : [];
  }
  

export default function Page() {  
  const [players, setPlayers] = useState<string[]>([]); // Initialize state

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await showAllPlayers();
      setPlayers(playersData);
    };

    fetchPlayers(); // Fetch players when component mounts
  }, []);


  return (
    <div>
        <MaxWidthWrapper className='mb-8 mt-24 text-center max-w-5xl'>
        <div className='mx-auto mb-10 sm:max-w-3xl'>
          <h1 className='text-6xl font-bold sm:text-7xl'>
            Monday Night Tennis Results
          </h1>
          <p className='mt-5 text-gray-600 sm:text-lg'>
          Net Gains and Friendly Games: Our Monday Chronicles
          </p>
          <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
        
        </div>

      
            <MatchScoreboard teamA={matchData.teamA} teamB={matchData.teamB} />

        </MaxWidthWrapper>
    </div>
  );
}

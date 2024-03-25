'use client'
import EnterSetScore from "@/components/EnterSetScore";
import MatchScoreboard from "@/components/MatchScoreboard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";



const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


  
  const player_group_id = 1;
  const showAllPlayers = async () => {
    const { data, error } = await supabase
      .from('playerDetails')
      .select('player_firstname, player_lastname, player_points')
      .eq('player_group_id',player_group_id)
      .order('player_points', { ascending: false });
    if (error) {
      throw error;
    }
    return data ? data.map(player => `${player.player_firstname} ${player.player_lastname} ${player.player_points}`) : [];
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
          <table className='table-auto w-full mt-5'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Player</th>
                
                <th className='px-4 py-2'>Points</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => {
                const [firstName, lastName, points] = player.split(' ');
                return (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                    <td className='border px-4 py-2'>{firstName} {lastName}</td>
                    <td className='border px-4 py-2'>{points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <EnterSetScore />
      </MaxWidthWrapper>
    </div>
  );
}

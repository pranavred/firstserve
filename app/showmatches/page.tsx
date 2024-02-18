//TO show some data from supabase -- Testing this --- 

import MatchScoreboard from "@/components/MatchScoreboard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

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
  

export default function Page() {
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
        </div>

      
            <MatchScoreboard teamA={matchData.teamA} teamB={matchData.teamB} />

        </MaxWidthWrapper>
    </div>
  );
}

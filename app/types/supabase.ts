export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      clubs: {
        Row: {
          club_id: number
          club_image_url: string | null
          club_name: string | null
          created_at: string
          location: string | null
        }
        Insert: {
          club_id?: number
          club_image_url?: string | null
          club_name?: string | null
          created_at?: string
          location?: string | null
        }
        Update: {
          club_id?: number
          club_image_url?: string | null
          club_name?: string | null
          created_at?: string
          location?: string | null
        }
        Relationships: []
      }
      courts: {
        Row: {
          club_parent_id: number | null
          "court_id ": number
          created_at: string
          description: string | null
          name: string | null
        }
        Insert: {
          club_parent_id?: number | null
          "court_id "?: number
          created_at?: string
          description?: string | null
          name?: string | null
        }
        Update: {
          club_parent_id?: number | null
          "court_id "?: number
          created_at?: string
          description?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "courts_club_parent_id_fkey"
            columns: ["club_parent_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["club_id"]
          }
        ]
      }
      matchDetails: {
        Row: {
          created_at: string
          match_detail_id: number
          match_id: number | null
          player_id: string | null
          points_earned: number | null
        }
        Insert: {
          created_at?: string
          match_detail_id?: number
          match_id?: number | null
          player_id?: string | null
          points_earned?: number | null
        }
        Update: {
          created_at?: string
          match_detail_id?: number
          match_id?: number | null
          player_id?: string | null
          points_earned?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "matchDetails_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["match_id"]
          },
          {
            foreignKeyName: "matchDetails_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      matches: {
        Row: {
          court_id: number | null
          created_at: string
          date: string | null
          location: string | null
          loser_id: string | null
          loser_partner_id: string | null
          match_id: number
          match_type: string | null
          winner_id: string | null
          winner_partner_id: string | null
        }
        Insert: {
          court_id?: number | null
          created_at?: string
          date?: string | null
          location?: string | null
          loser_id?: string | null
          loser_partner_id?: string | null
          match_id?: number
          match_type?: string | null
          winner_id?: string | null
          winner_partner_id?: string | null
        }
        Update: {
          court_id?: number | null
          created_at?: string
          date?: string | null
          location?: string | null
          loser_id?: string | null
          loser_partner_id?: string | null
          match_id?: number
          match_type?: string | null
          winner_id?: string | null
          winner_partner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_court_id_fkey"
            columns: ["court_id"]
            isOneToOne: false
            referencedRelation: "courts"
            referencedColumns: ["court_id "]
          },
          {
            foreignKeyName: "matches_loser_id_fkey"
            columns: ["loser_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_loser_partner_id_fkey"
            columns: ["loser_partner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_winner_partner_id_fkey"
            columns: ["winner_partner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      notes: {
        Row: {
          created_at: string
          note_body: string
          note_id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          note_body: string
          note_id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          note_body?: string
          note_id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      playerDetails: {
        Row: {
          created_at: string
          player_details_id: number
          player_firstname: string | null
          player_gender: string | null
          player_lastname: string | null
          player_location: string | null
          player_points: number | null
          player_profile_picture_url: string | null
          player_rating: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          player_details_id?: number
          player_firstname?: string | null
          player_gender?: string | null
          player_lastname?: string | null
          player_location?: string | null
          player_points?: number | null
          player_profile_picture_url?: string | null
          player_rating?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          player_details_id?: number
          player_firstname?: string | null
          player_gender?: string | null
          player_lastname?: string | null
          player_location?: string | null
          player_points?: number | null
          player_profile_picture_url?: string | null
          player_rating?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "playerDetails_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      ratings: {
        Row: {
          created_at: string
          match_id: number | null
          player_id: string | null
          points_earner: number | null
          rating_id: number
        }
        Insert: {
          created_at?: string
          match_id?: number | null
          player_id?: string | null
          points_earner?: number | null
          rating_id?: number
        }
        Update: {
          created_at?: string
          match_id?: number | null
          player_id?: string | null
          points_earner?: number | null
          rating_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "ratings_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["match_id"]
          },
          {
            foreignKeyName: "ratings_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      sets: {
        Row: {
          created_at: string
          losing_team_score: number | null
          match_id: number | null
          set_id: number
          set_number: number | null
          winning_team_score: number | null
        }
        Insert: {
          created_at?: string
          losing_team_score?: number | null
          match_id?: number | null
          set_id?: number
          set_number?: number | null
          winning_team_score?: number | null
        }
        Update: {
          created_at?: string
          losing_team_score?: number | null
          match_id?: number | null
          set_id?: number
          set_number?: number | null
          winning_team_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sets_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["match_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

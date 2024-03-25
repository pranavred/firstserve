/**
 * v0 by Vercel.
 * @see https://v0.dev/t/80UEmkP0Yt8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <div>Record Set Scores</div>
        <div className="leading-none">Enter the set scores for each player.</div>
      </CardHeader>
      <CardContent className="space-y-4">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <Label className="flex items-center" htmlFor="player1">
                Player 1
              </Label>
              <Input id="player1" placeholder="0" type="number" />
            </div>
            <div className="grid gap-1.5">
              <Label className="flex items-center" htmlFor="player2">
                Player 2
              </Label>
              <Input id="player2" placeholder="0" type="number" />
            </div>
          </div>
          <Button className="mt-4" type="submit">
            Submit
          </Button>
        </form>
        <div className="flex items-center space-x-2">
          <CheckIcon className="w-6 h-6" />
          <div>Scores recorded. Good luck in the next set!</div>
        </div>
        <div className="flex items-center mt-4">
          <Button className="mr-2" variant="outline">
            Add Set
          </Button>
          <Button variant="outline">Remove Set</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

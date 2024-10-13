import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ToolTip({tooltip_content, children}:{tooltip_content:string, children: React.ReactElement}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip_content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

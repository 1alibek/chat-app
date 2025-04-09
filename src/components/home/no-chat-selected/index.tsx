import {MessageSquare} from "lucide-react"

const NoChatSelected = () => {
    return (
        <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 max-[500px]:p-4">
            <div className="max-w-md text-center space-y-6">
                <div className="flex justify-center gap-4 mb-4">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce">
                            <MessageSquare className="w-8 h-8 text-primary " />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold max-[450px]:text-[14px]">Welcome to Chatty!</h2>
                <p className="text-base-content/60 max-[450px]:text-[10px]">
                    Select a conversation from the sidebar to start chatting
                </p>
            </div>
        </div>
    )
}

export default NoChatSelected

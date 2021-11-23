import React, { useState, useEffect } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  Avatar,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  MessageSeparator,
  Sidebar,
  Conversation,
  Search,
  ConversationList,
} from "@chatscope/chat-ui-kit-react";
import userImage from "../assets/user.png";
import { useRouteMatch } from "react-router";
//https://github.com/chatscope/chat-ui-kit-react
//https://github.com/chatscope/use-chat

const NotePage = () => {
    
    const conversations = [
        { id: 0, name: "굿즈 공구1" },
        { id: 1, name: "굿즈 공구2" },
        { id: 2, name: "굿즈 공구3" }
      ];
    const [messages, setMessages]=React.useState({
        0: [
            {message: "아아 테스트중"},
            {message: "테스트"}
        ],
        1: [
            { message: "헤이 모두들 안녕 내가 누군지 아니?"}, 
            { message: "김보경이다! 김보경이다!", direction: "outgoing", position: "single"}
        ],
        2: [
            { message: "안녕하세요 최강무적 FRONTEND 팀입니다."}, 
            { message: "기대할게요", direction: "outgoing", position: "single"}
        ]
    });

  const [messageInputValue, setMessageInputValue] = useState("");
  const [currentConversation, setCurrentConversation] = useState(0);

    return (

        <div style={{ position: "relative", padding: "100px",height: "500px" , display:"flex", justifyContent:"center"}}>
            <MainContainer responsive style={{ width: "800px",border:"1px solid grey", borderRadius:"8px" }}>
            <Sidebar position="left" scrollable={false}>
                <Search placeholder="Recent..." disabled />
                <ConversationList>
                    {conversations.map( c => <Conversation key={c.id} name={c.name} info={"굿즈 언제까지 진행하나요?"} lastSenderName={"오리"}
                                         onClick={() => setCurrentConversation(c.id)} >
                                             <Avatar src={userImage}></Avatar></Conversation>)  }
                </ConversationList> 
            </Sidebar>
            <ChatContainer>
            <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={userImage} name="Me" />
            <ConversationHeader.Content userName="Nickname"/>
            </ConversationHeader>
            <MessageList>
                { messages[currentConversation].map((m,idx) => <Message key={idx} model={m}/>)}
            </MessageList>
            <MessageInput placeholder="쪽지 보내기" direction="outgoing" position="single"
                value={messageInputValue}
                onChange={(val) => setMessageInputValue(val)}
                onSend={() => {messages[currentConversation].push({message: messageInputValue, direction: "outgoing", position: "single"}); setMessageInputValue("");}}
            />
            </ChatContainer>
            </MainContainer>
        </div>

    );


}
export default NotePage;

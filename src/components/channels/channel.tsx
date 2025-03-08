import { Avatar, Card, CardActionArea, CardHeader } from "@mui/material";
import { ChannelType } from "./constants";
import useStore from "../../store";

interface ChannelProps {
  channel: ChannelType;
}

function Channel({ channel }: ChannelProps) {
  const { setOpenChannel: setOpenChannel } = useStore.getState();

  const openModal = (channel: ChannelType) => {
    setOpenChannel(channel);
  }

  return (
    <Card sx={{ display: 'inline-block', margin: 1, width: '350px' }}>
      <CardActionArea onClick={() => openModal(channel)}>
        <CardHeader
          avatar={<Avatar src={channel.icon}/>}
          title={channel.name}
          subheader={channel.getSubheader()}
        />
      </CardActionArea>
    </Card>
  )
};

export default Channel;
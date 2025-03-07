import { Avatar, Card, CardActionArea, CardHeader } from "@mui/material";
import { ChannelIdEnumType, ChannelType } from "./constants";
import useStore from "../../store";

interface ChannelProps {
  channel: ChannelType;
}

function Channel({ channel }: ChannelProps) {
  const { setOpenChannelId: setOpenChannelId } = useStore.getState();

  const openModal = (channelId: ChannelIdEnumType) => {
    setOpenChannelId(channelId);
  }

  return (
    <Card sx={{ display: 'inline-block', margin: 1, width: '350px' }}>
      <CardActionArea onClick={() => openModal(channel.id)}>
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
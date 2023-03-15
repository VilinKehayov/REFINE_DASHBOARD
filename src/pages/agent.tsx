import {useList} from "@pankod/refine-core";
import {Box, Typography} from "@pankod/refine-mui";

import {AgentCard} from "components"

const Agents = () => {
  const {data, isLoading, isError} = useList({
    resource: "user",
  });
  
  const allAgents = data?.data;
  return (
    <div>agent</div>
  )
}

export default Agents
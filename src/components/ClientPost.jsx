
import { withClientHydrate } from "../hoc/withClientHydrate";
import Post from "./Post";

export default withClientHydrate("client-post", Post);
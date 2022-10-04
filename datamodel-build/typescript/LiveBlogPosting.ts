import { dateTime } from "./dateTime";
import { BlogPosting } from "./BlogPosting";


export class LiveBlogPosting extends BlogPosting {
  coverageEndTime: dateTime;
  coverageStartTime: dateTime;
  liveBlogUpdate: BlogPosting;


}

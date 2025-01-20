import { Icon } from "#components";
import { Button } from "@lianqq/resume-ui";

const sections = [
  {
    label: "基本信息",
    icon: "lucide:user-round",
    id: "#basic",
  },
  {
    label: "教育经历",
    icon: "lucide:book-open",
    id: "#education",
  },
  {
    label: "工作经历",
    icon: "lucide:briefcase",
    id: "#work",
  },
  {
    label: "项目经历",
    icon: "lucide:briefcase",
    id: "#project",
  },
  {
    label: "个人简介",
    icon: "lucide:user-round",
    id: "#profile",
  },
];

export default defineComponent({
  name: "SidebarSection",
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <div
        class={`overflow-y-auto h-screen flex flex-col justify-center gap-2 py-12  bg-zinc-950 border-r border-r-border sidebar ${props.isCollapsed ? "collapsed" : null}`}
      >
        {sections.map((item, index) => {
          return (
            <div class="flex items-center gap-2 overflow-hidden justify-center">
              <Button
                variant="ghost"
                class="flex items-center overflow-hidden gap-2 menu-button p-0"
              >
                <Icon name={item.icon} size={16} class="icon" />
                <p class="text-sml menu-label">{item.label}</p>
              </Button>
            </div>
          );
        })}
      </div>
    );
  },
});

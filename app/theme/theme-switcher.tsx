import * as React from "react";
import { Button } from "~/components/ui/button";
import { themes, type Theme, type ThemeColors } from "./themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Palette } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState(themes[0]);
  const { theme: resolvedTheme, setTheme: setAppTheme } = useTheme();
  const isDark = resolvedTheme?.includes("dark") || resolvedTheme === "dark";
  const timerRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

  // 批量更新CSS变量
  const updateCSSVariables = React.useCallback(
    (colors: ThemeColors) => {
      // 使用requestAnimationFrame确保在浏览器重绘前执行
      requestAnimationFrame(() => {
        const docStyle = document.documentElement.style;
        // 先设置背景色，防止闪烁
        if (isDark) {
          docStyle.setProperty("background-color", "#0c0a09");
        } else {
          docStyle.setProperty("background-color", "#ffffff");
        }

        // 然后设置其他变量
        docStyle.setProperty("--chart-1", `hsl(${colors.chart1})`);
        docStyle.setProperty("--chart-2", `hsl(${colors.chart2})`);
        docStyle.setProperty("--chart-3", `hsl(${colors.chart3})`);
        docStyle.setProperty("--chart-4", `hsl(${colors.chart4})`);
        docStyle.setProperty("--chart-5", `hsl(${colors.chart5})`);
      });
    },
    [isDark]
  );

  // 防抖处理主题切换
  const applyTheme = React.useCallback(
    (selectedTheme: Theme) => {
      clearTimeout(timerRef.current);

      // 立即应用背景色变化，减少闪烁
      const root = document.documentElement;
      if (isDark) {
        root.style.backgroundColor = "#0c0a09";
      } else {
        root.style.backgroundColor = "#ffffff";
      }

      timerRef.current = setTimeout(() => {
        setTheme(selectedTheme);

        const colors =
          selectedTheme.colors.light && selectedTheme.colors.dark
            ? isDark
              ? selectedTheme.colors.dark
              : selectedTheme.colors.light
            : (selectedTheme.colors as ThemeColors);

        updateCSSVariables(colors);
      }, 10); // 减少延迟时间，提高响应速度
    },
    [isDark, updateCSSVariables]
  );

  // 同步主题变化
  React.useEffect(() => {
    const colors =
      theme.colors.light && theme.colors.dark
        ? isDark
          ? theme.colors.dark
          : theme.colors.light
        : (theme.colors as ThemeColors);

    updateCSSVariables(colors);
  }, [theme, isDark, updateCSSVariables]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.name}
            onClick={() => {
              setAppTheme(resolvedTheme); // 确保先更新主题状态
              applyTheme(t);
            }}
            className="flex items-center gap-2"
          >
            <div className="flex gap-1">
              {t.colors.themeColors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            {t.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

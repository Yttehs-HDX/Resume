import { YStack } from 'tamagui'
import { PageLayout } from '../../components/frame/layout'
import { SkillCard, SkillSummary, ToolsCard } from './skill-inner'
import skillData from '../../data/skill.json'

/**
 * Skill page - Displays programming skills and technical competencies
 * Features a summary card followed by individual skill cards and tools stack
 */
export function SkillPage() {
  return (
    <PageLayout>
      <YStack gap="$5" width="100%">
        {/* Skills Summary Section */}
        <SkillSummary summary={skillData.summary} />

        {/* Tools Stack Section */}
        <ToolsCard tools={skillData.tools} />

        {/* Individual Skills Section */}
        <YStack gap="$4">
          {skillData.skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </YStack>
      </YStack>
    </PageLayout>
  )
}

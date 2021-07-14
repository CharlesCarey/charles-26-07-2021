import { Dropdown } from 'platform/design-system/components/dropdown';
import { useGroup } from 'order-book-store';

export const GroupDropdown = () => {
  const [{ group, availableGroupings }, { setGroup }] = useGroup();

  return (
    <Dropdown
      selectedItem={group}
      items={availableGroupings.map(groupItem => groupItem.toFixed(2))}
      onSelect={item => setGroup(Number(item))}
      placeholder={`Group ${group.toFixed(2)}`}
    />
  );
};

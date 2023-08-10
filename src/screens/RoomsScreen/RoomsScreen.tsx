import { Screen } from '../../components/templates';
import { ParentTopBar } from '../../components/organism';
import { useTranslation } from 'react-i18next';
import { RoomsTopBarContent } from '../../components/molecules';
import { ChatRoomsList } from '../../components/organism';

export const RoomsScreen = () => {
    const { t } = useTranslation();

    return (
        <Screen>
            <ParentTopBar label={t('rooms.rooms')}>
                <RoomsTopBarContent />
            </ParentTopBar>
            <ChatRoomsList />
        </Screen>
    );
};

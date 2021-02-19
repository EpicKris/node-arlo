import { Basestation } from './basestation';
import { Client } from '../client';
import { ParentDeviceData, DeviceType } from '../responses';

describe('Basestation Device', () => {

  const client = new Client();
  const deviceData: ParentDeviceData = {
    userId: 'USER-ID',
    deviceId: 'DEVICE-ID',
    uniqueId: 'UNIQUE-ID',
    deviceType: DeviceType.BASESTATION,
    deviceName: 'Basestation',
    lastModified: new Date(),
    xCloudId: 'X-CLOUD-ID',
    lastImageUploaded: '',
    userRole: '',
    displayOrder: 1,
    mediaObjectCount: 0,
    state: '',
    modelId: 'MODEL-ID',
    cvrEnabled: true,
    dateCreated: new Date(),
    interfaceVersion: 'v0.0.0',
    interfaceSchemaVer: 'v0.0.0',
    owner: {
      firstName: 'Kristian',
      lastName: 'Matthews',
      ownerId: 'OWNER-ID'
    },
    properties: {
      modelId: 'MODEL-ID',
      olsonTimeZone: '',
      hwVersion: 'v0.0.0'
    },
    firmwareVersion: 'v0.0.0',
    timeZone: '',
    connectivity: {
      type: '',
      connected: false,
      mepStatus: ''
    },
    automationRevision: 0,
    migrateActivityZone: false
  };
  const basestation = new Basestation(client, deviceData);

  it('Should mirror ID correctly', () => {
    expect(basestation.id).toBe('DEVICE-ID');
  });

  it('Should mirror unique ID correctly', () => {
    expect(basestation.uniqueId).toBe('UNIQUE-ID');
  });

  it('Should mirror type correctly', () => {
    expect(basestation.type).toBe(DeviceType.BASESTATION);
  });

  it('Should mirror name correctly', () => {
    expect(basestation.name).toBe('Basestation');
  });

  it('Should mirror model ID correctly', () => {
    expect(basestation.modelId).toBe('MODEL-ID');
  });

  it('Should mirror hardware version correctly', () => {
    expect(basestation.hardwareVersion).toBe('v0.0.0');
  });

  it('Should mirror firmware version correctly', () => {
    expect(basestation.firmwareVersion).toBe('v0.0.0');
  });
    
  it('Should convert to JSON', () => {
    expect(() => {
      JSON.stringify(basestation)
    }).not.toThrow();
  });
});